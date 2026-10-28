/* Browser cameras have no standard optical HFOV. Classification only supplies
 * estimates; a delivered stream's exact format key owns every manual override. */
(function(root){
  function classify(label='',facing=[]){
    const name=String(label).normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]/g,'');
    const modes=Array.isArray(facing)?facing:[facing];
    const front=modes.includes('user')||/front|facetime|truedepth|anteriore|frontal|avant|vorder/.test(name);
    const rear=!front&&(modes.includes('environment')||/back|rear|retro|posterior|arriere|trasera|ruck|hinter|environment/.test(name));
    const role=front?'front':/ultrawide|ultragrandangol|ultragranangul|ultragrandangle|ultragranangular|ultraweit/.test(name.replace(/ /g,''))?'ultra':/telephoto|teleob|teleobjectif/.test(name)?'tele':/triple|dual|tripla|doppia|double|doble|dreifach/.test(name)?'virtual':'main';
    return {role,rear:rear||role==='ultra'||role==='tele'};
  }
  function estimate(label,zoom=1){
    const role=classify(label).role,base=role==='ultra'?100:role==='tele'?48:role==='front'?62:65;
    return 2*Math.atan(Math.tan(base*Math.PI/360)/Math.max(1,Number(zoom)||1))*180/Math.PI;
  }
  function choose(cameras,targetHFOV,aspect){
    let available=cameras.filter(c=>c.autoEligible&&!['front','tele'].includes(c.role)&&[c.hfov,c.width,c.height].every(v=>Number.isFinite(v)&&v>0)&&c.hfov<180);
    if(available.some(c=>c.role!=='virtual'))available=available.filter(c=>c.role!=='virtual');
    const ratio=c=>Math.tan(c.hfov*Math.PI/360)/Math.tan(targetHFOV*Math.PI/360);
    const score=c=>Math.min(ratio(c),ratio(c)*aspect*c.height/c.width);
    const covered=available.filter(c=>score(c)>=.999).sort((a,b)=>a.hfov-b.hfov||Number(b.current)-Number(a.current));
    return covered[0]||available.sort((a,b)=>score(b)-score(a)||Number(b.current)-Number(a.current))[0]||null;
  }
  root.WebCameraPolicy={classify,estimate,choose};
  if(typeof module!=='undefined')module.exports=root.WebCameraPolicy;
})(globalThis);
