/* ChArUco geometry for the exact OpenCV 4.13 board shipped with this app.
 * Square units are arbitrary: intrinsics do not require a measured distance. */
(function(root){
  const COLS=7,ROWS=5,MIN_VIEWS=12,MIN_POINTS=20;
  const fail=message=>{throw new Error(message);};
  function create(cv){
    const dictionary=cv.getPredefinedDictionary(cv.DICT_4X4_50),empty=new cv.Mat();
    const board=new cv.aruco_CharucoBoard(new cv.Size(COLS,ROWS),1,.72,dictionary,empty);
    const cp=new cv.aruco_CharucoParameters(),dp=new cv.aruco_DetectorParameters(),rp=new cv.aruco_RefineParameters(10,3,true);
    const detector=new cv.aruco_CharucoDetector(board,cp,dp,rp);
    const samples=[];let previous=null,stable=0,lastAccepted=0,size=null;
    const counts=()=>Object.fromEntries(['front','left','right','up','down','extra'].map(k=>[k,samples.filter(s=>s.group===k).length]));
    const objects=ids=>ids.flatMap(id=>[id%(COLS-1)+1,Math.floor(id/(COLS-1))+1,0]);
    const matrix=(width,height)=>cv.matFromArray(3,3,cv.CV_64F,[width*.85,0,width/2,0,width*.85,height/2,0,0,1]);
    function pose(points,ids,width,height){
      const obj=cv.matFromArray(ids.length,1,cv.CV_32FC3,objects(ids)),img=cv.matFromArray(ids.length,1,cv.CV_32FC2,points),K=matrix(width,height),D=cv.Mat.zeros(5,1,cv.CV_64F),r=new cv.Mat(),t=new cv.Mat(),R=new cv.Mat();
      try{
        if(!cv.solvePnP(obj,img,K,D,r,t))return null;
        cv.Rodrigues(r,R);const a=R.data64F;
        return {x:Math.atan2(a[2],a[8])*180/Math.PI,y:Math.atan2(a[5],a[8])*180/Math.PI};
      }finally{[obj,img,K,D,r,t,R].forEach(m=>m.delete());}
    }
    // Refine checker intersections from intensity gradients (OpenCV.js omits cornerSubPix).
    function refine(gray,points){
      const data=gray.data,w=gray.cols,h=gray.rows;
      function at(x,y){const ix=Math.floor(x),iy=Math.floor(y),a=x-ix,b=y-iy;if(ix<0||iy<0||ix+1>=w||iy+1>=h)return 0;const k=iy*w+ix;return (1-b)*((1-a)*data[k]+a*data[k+1])+b*((1-a)*data[k+w]+a*data[k+w+1]);}
      for(let j=0;j<points.length;j+=2){
        const ox=points[j],oy=points[j+1];let x=ox,y=oy;
        for(let iter=0;iter<20;iter++){
          if(x<6||y<6||x>w-7||y>h-7)break;
          let a=0,b=0,c=0,bx=0,by=0;
          for(let v=-4;v<=4;v++)for(let u=-4;u<=4;u++){
            const gx=at(x+u+1,y+v)-at(x+u-1,y+v),gy=at(x+u,y+v+1)-at(x+u,y+v-1),weight=Math.exp(-(u*u+v*v)/16);
            const xx=gx*gx*weight,xy=gx*gy*weight,yy=gy*gy*weight;
            a+=xx;b+=xy;c+=yy;bx+=xx*u+xy*v;by+=xy*u+yy*v;
          }
          const determinant=a*c-b*b;if(determinant<1e-9)break;
          const dx=(c*bx-b*by)/determinant,dy=(a*by-b*bx)/determinant;
          if(!Number.isFinite(dx+dy)||Math.hypot(x+dx-ox,y+dy-oy)>4)break;
          x+=dx;y+=dy;if(dx*dx+dy*dy<.000025)break;
        }
        points[j]=x;points[j+1]=y;
      }
    }
    function detect(image){
      const rgba=cv.matFromImageData(image),gray=new cv.Mat(),corners=new cv.Mat(),ids=new cv.Mat(),lap=new cv.Mat(),mean=new cv.Mat(),std=new cv.Mat();
      try{
        cv.cvtColor(rgba,gray,cv.COLOR_RGBA2GRAY);detector.detectBoard(gray,corners,ids);
        if(ids.rows>=MIN_POINTS)refine(gray,corners.data32F);
        if(ids.rows<MIN_POINTS)return {ok:false,message:'Inquadra tutto il foglio, senza tagliare la scacchiera.'};
        const points=Array.from(corners.data32F),idList=Array.from(ids.data32S);
        const xs=points.filter((_,i)=>i%2===0),ys=points.filter((_,i)=>i%2===1),minX=Math.min(...xs),maxX=Math.max(...xs),minY=Math.min(...ys),maxY=Math.max(...ys);
        const area=(maxX-minX)*(maxY-minY)/(image.width*image.height);
        if(minX<image.width*.025||maxX>image.width*.975||minY<image.height*.025||maxY>image.height*.975||area<.055||area>.65)return {ok:false,message:'Mantieni tutto il foglio visibile e abbastanza grande.',points};
        const roi=gray.roi(new cv.Rect(Math.floor(minX),Math.floor(minY),Math.max(1,Math.floor(maxX-minX)),Math.max(1,Math.floor(maxY-minY))));
        try{cv.Laplacian(roi,lap,cv.CV_64F);cv.meanStdDev(lap,mean,std);}finally{roi.delete();}
        if(std.data64F[0]**2<65)return {ok:false,message:'Immagine poco nitida: più luce e telefono fermo.',points};
        const angle=pose(points,idList,image.width,image.height);
        if(!angle||Math.max(Math.abs(angle.x),Math.abs(angle.y))>52)return {ok:false,message:'Riduci l’inclinazione del telefono.',points};
        let group=Math.max(Math.abs(angle.x),Math.abs(angle.y))<12?'front':Math.abs(angle.x)>Math.abs(angle.y)?(angle.x<0?'left':'right'):(angle.y<0?'up':'down');
        const tally=counts();if(tally[group]>=2&&group!=='front'&&samples.length>=10)group='extra';
        return {ok:true,points,ids:idList,angle,group,width:image.width,height:image.height,area};
      }finally{[rgba,gray,corners,ids,lap,mean,std].forEach(m=>m.delete());}
    }
    function observe(image,now){
      if(size&&(size.width!==image.width||size.height!==image.height))fail('Formato cambiato. Ricomincia la verifica.');
      size={width:image.width,height:image.height};
      const d=detect(image),tally=counts();
      if(!d.ok){stable=0;previous=null;return {...d,count:samples.length,counts:tally};}
      let motion=Infinity;
      if(previous){const p=new Map(previous.ids.map((id,i)=>[id,[previous.points[i*2],previous.points[i*2+1]]]));let sum=0,n=0;d.ids.forEach((id,i)=>{if(p.has(id)){const q=p.get(id);sum+=(d.points[i*2]-q[0])**2+(d.points[i*2+1]-q[1])**2;n++;}});if(n>=MIN_POINTS)motion=Math.sqrt(sum/n);}
      previous=d;stable=motion<1.5?stable+1:0;
      const duplicate=samples.some(s=>{
        const p=new Map(s.ids.map((id,i)=>[id,[s.points[i*2],s.points[i*2+1]]]));let sum=0,n=0;
        d.ids.forEach((id,i)=>{if(p.has(id)){const q=p.get(id);sum+=(d.points[i*2]-q[0])**2+(d.points[i*2+1]-q[1])**2;n++;}});
        return n>=MIN_POINTS&&Math.sqrt(sum/n)/image.width<.035&&Math.hypot(s.angle.x-d.angle.x,s.angle.y-d.angle.y)<8;
      });
      const needed=(tally[d.group]||0)<2;
      let accepted=false,message;
      if(!needed||duplicate)message=guidance(tally);
      else if(stable<3)message='Tieni fermo il telefono…';
      else if(now-lastAccepted<1200)message='Cambia leggermente posizione.';
      else{samples.push({...d,points:d.points.slice(),ids:d.ids.slice()});lastAccepted=now;stable=0;accepted=true;message='Immagine acquisita · '+guidance(counts());}
      return {...d,accepted,message,count:samples.length,counts:counts(),complete:samples.length>=MIN_VIEWS};
    }
    function guidance(tally){
      if(tally.front<2)return 'Inquadra il foglio frontalmente, poi cambia leggermente posizione.';
      if(tally.left<2||tally.right<2)return 'Sposta il telefono prima a sinistra, poi a destra: il foglio deve apparire inclinato.';
      if(tally.up<2||tally.down<2)return 'Inquadra il foglio dall’alto e dal basso, mantenendolo tutto visibile.';
      return 'Altre due angolazioni diverse, anche più vicino o più lontano.';
    }
    function fit(views,width,height,freeModel=false){
      const op=new cv.MatVector(),ip=new cv.MatVector(),K=matrix(width,height),D=cv.Mat.zeros(8,1,cv.CV_64F),rv=new cv.MatVector(),tv=new cv.MatVector(),si=new cv.Mat(),se=new cv.Mat(),errors=new cv.Mat();
      try{
        for(const s of views){const o=cv.matFromArray(s.ids.length,1,cv.CV_32FC3,objects(s.ids)),i=cv.matFromArray(s.ids.length,1,cv.CV_32FC2,s.points);op.push_back(o);ip.push_back(i);o.delete();i.delete();}
        let flags=cv.CALIB_USE_INTRINSIC_GUESS|cv.CALIB_FIX_ASPECT_RATIO|cv.CALIB_ZERO_TANGENT_DIST|cv.CALIB_FIX_K3|cv.CALIB_FIX_K4|cv.CALIB_FIX_K5|cv.CALIB_FIX_K6;
        if(!freeModel)flags|=cv.CALIB_FIX_PRINCIPAL_POINT|cv.CALIB_FIX_K1|cv.CALIB_FIX_K2;
        const rms=cv.calibrateCameraExtended(op,ip,new cv.Size(width,height),K,D,rv,tv,si,se,errors,flags,new cv.TermCriteria(cv.TERM_CRITERIA_EPS|cv.TERM_CRITERIA_MAX_ITER,80,1e-8));
        return {rms,K:Array.from(K.data64F),distortion:Array.from(D.data64F),std:Array.from(si.data64F),errors:Array.from(errors.data64F)};
      }finally{[op,ip,K,D,rv,tv,si,se,errors].forEach(m=>m.delete());}
    }
    function solve(views=samples,width=size?.width,height=size?.height){
      if(views.length<MIN_VIEWS)fail('Servono almeno 12 inquadrature diverse.');
      const groups={front:0,left:0,right:0,up:0,down:0};
      for(const s of views){const a=pose(s.points,s.ids,width,height);if(!a)continue;const g=Math.max(Math.abs(a.x),Math.abs(a.y))<12?'front':Math.abs(a.x)>Math.abs(a.y)?(a.x<0?'left':'right'):(a.y<0?'up':'down');groups[g]++;}
      if(Object.values(groups).some(n=>n<2))fail('Servono riprese frontali e inclinate in tutte le direzioni.');
      const free=fit(views,width,height,true),f=free.K[0];
      if(![...free.K,...free.distortion,free.rms].every(Number.isFinite)||f<=0)fail('Misura non stabile. Ripeti con angolazioni più diverse.');
      if(Math.abs(free.K[2]-width/2)>width*.018||Math.abs(free.K[5]-height/2)>height*.018)fail('Il centro ottico non è sufficientemente allineato. Prova un’altra fotocamera o la verifica manuale.');
      const r2=(width*width+height*height)/(4*f*f),radial=Math.abs(free.distortion[0]*r2+free.distortion[1]*r2*r2);
      if(radial>.018)fail('Questa fotocamera presenta troppa distorsione per il mirino web. Prova la fotocamera principale.');
      const result=fit(views,width,height),fx=result.K[0],relativeStd=result.std[1]/fx;
      const a=fit(views.filter((_,i)=>i%2===0),width,height),b=fit(views.filter((_,i)=>i%2===1),width,height),agreement=Math.abs(a.K[0]-b.K[0])/fx;
      const hfov=2*Math.atan(width/(2*fx))*180/Math.PI;
      if(![hfov,result.rms,relativeStd,agreement].every(Number.isFinite)||hfov<=5||hfov>=150||result.rms>.65||Math.max(...result.errors)>1.1||relativeStd>.015||agreement>.018)fail('La misura non è abbastanza stabile. Migliora luce, nitidezza e varietà delle angolazioni e riprova.');
      return {hfov,method:'charuco-v1',samples:views.length,rms:result.rms,relativeStd,agreement,analysisWidth:width,analysisHeight:height};
    }
    function dispose(){[detector,board,empty,dictionary,cp,dp,rp].forEach(m=>m.delete());}
    return {detect,observe,solve,fit,dispose,samples};
  }
  root.OpticalCalibration={create,COLS,ROWS,MIN_VIEWS};
  if(typeof module!=='undefined')module.exports=root.OpticalCalibration;
})(globalThis);
