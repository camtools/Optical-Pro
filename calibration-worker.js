/* Lazy, isolated vision runtime. No camera images leave this worker/browser. */
importScripts('calibration-core.js?v=20261028-21');
let engine;
onmessage=event=>{
  const m=event.data;
  try{
    if(m.action==='init'){
      importScripts('https://docs.opencv.org/4.13.0/opencv.js');
      const start=()=>{
        try{engine=OpticalCalibration.create(cv);postMessage({type:'ready'});}catch(e){postMessage({type:'error',message:'Riconoscimento non disponibile. Riprova o usa la verifica manuale.'});}
      };
      if(cv.Mat)start();else cv.onRuntimeInitialized=start;
    }else if(m.action==='frame'&&engine){
      const result=engine.observe(m.image,m.now);
      postMessage({type:'frame',...result});
      if(result.complete)postMessage({type:'result',result:engine.solve()});
    }
  }catch(e){postMessage({type:'error',message:typeof e==='object'&&e.message?e.message:'Non riesco a verificare questa immagine. Riprova con più luce.'});}
};
