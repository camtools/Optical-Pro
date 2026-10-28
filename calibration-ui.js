/* Guided calibration. Runtime and images stay in a cancellable Web Worker. */
(function(){
  let worker=null,timer=null,loadTimeout=null,frameTimeout=null,signature=null,busy=false,ready=false,finished=false,result=null,lastDraw=null;
  const el=id=>document.getElementById(id),preview=()=>el('guidedPreview');
  function status(message){el('guidedStatus').textContent=message;}
  function cleanup(){clearTimeout(timer);clearTimeout(loadTimeout);clearTimeout(frameTimeout);worker?.terminate();worker=null;busy=false;ready=false;}
  function stop(message){cleanup();finished=true;status(message);el('guidedRetry').hidden=false;}
  function valid(){return signature&&webSignature()===signature&&cameraReady&&video.readyState>=2;}
  function paint(points=[],accepted=false){
    const c=preview(),ctx=c.getContext('2d');
    c.width=Math.min(960,Math.max(video.videoWidth,video.videoHeight));c.height=Math.round(c.width*Math.min(video.videoWidth,video.videoHeight)/Math.max(video.videoWidth,video.videoHeight));
    drawWebSource(ctx,{x:0,y:0,width:c.width,height:c.height},false);
    lastDraw=ctx.getImageData(0,0,c.width,c.height);
    ctx.fillStyle=accepted?'#43e47b':'#00e6ff';
    for(let i=0;i<points.length;i+=2){ctx.beginPath();ctx.arc(points[i],points[i+1],3.5,0,Math.PI*2);ctx.fill();}
  }
  function tick(){
    if(finished||!worker)return;
    if(!valid()){stop('Fotocamera o formato cambiati. Ricomincia la verifica.');return;}
    if(document.visibilityState!=='visible'){stop('Verifica interrotta. Torna alla fotocamera e ricomincia.');return;}
    paint();
    if(!busy&&ready){busy=true;worker.postMessage({action:'frame',image:lastDraw,now:performance.now()},[lastDraw.data.buffer]);frameTimeout=setTimeout(()=>stop('Il riconoscimento sta impiegando troppo tempo. Riprova.'),15000);}
  }
  function onMessage(event){
    const m=event.data;
    if(m.type==='ready'){clearTimeout(loadTimeout);ready=true;status('Inquadra tutto il foglio frontalmente e tieni fermo il telefono.');tick();}
    if(m.type==='frame'){
      clearTimeout(frameTimeout);busy=false;paint(m.points||[],m.accepted);
      el('guidedCount').textContent=m.count+' / 12';el('guidedProgress').value=m.count;
      status(m.message);if(!m.complete)timer=setTimeout(tick,260);
    }
    if(m.type==='result'){
      if(!valid()){stop('Il formato è cambiato. Ripeti la verifica.');return;}
      cleanup();finished=true;result=m.result;
      status('Verifica completata. Puoi usare la nuova calibrazione.');
      el('guidedResult').textContent='Campo visivo '+result.hfov.toFixed(2)+'° · '+result.samples+' immagini concordanti';
      el('guidedUse').hidden=false;
    }
    if(m.type==='error')stop(m.message);
  }
  function open(){
    if(isRecording||recordingStarting||photoInProgress)return;
    if(!cameraReady||video.readyState<2){alert('Attendi che la fotocamera sia pronta.');return;}
    cleanup();signature=webSignature();result=null;finished=false;
    el('guidedCalibration').hidden=false;el('guidedUse').hidden=true;el('guidedRetry').hidden=true;el('guidedResult').textContent='';el('guidedCount').textContent='0 / 12';el('guidedProgress').value=0;
    closeSettings();paint();status('Carico il riconoscimento del foglio… La prima volta serve una connessione Internet.');
    worker=new Worker('calibration-worker.js?v=20261028-21');worker.onmessage=onMessage;worker.onerror=()=>stop('Riconoscimento non disponibile. Controlla la connessione e riprova.');
    loadTimeout=setTimeout(()=>stop('Caricamento non riuscito. Controlla la connessione e riprova.'),45000);worker.postMessage({action:'init'});
  }
  function close(){cleanup();finished=true;el('guidedCalibration').hidden=true;openSettings();switchTab('fov',document.querySelectorAll('.tab-btn')[4]);}
  function use(){
    try{
      if(!result||!valid())throw new Error('La fotocamera è cambiata. Ripeti la verifica.');
      localStorage.setItem('optical.web.calibration.'+signature,JSON.stringify({...result,measuredAt:new Date().toISOString()}));
      webInfo=null;refreshWebOptics();close();
    }catch(e){stop(e.message);}
  }
  document.addEventListener('visibilitychange',()=>{if(!el('guidedCalibration').hidden&&!finished)stop('Verifica interrotta. Quando torni, premi Ricomincia.');});
  window.GuidedCalibration={open,close,use,retry:open};
})();
