// ─── DATABASES ────────────────────────────────────────────────────────────────
const CAMERAS={ARRI:[
  {model:"ALEXA Plus",     year:2011,modes:[{name:"2.8K Open Gate",w:23.76,h:17.82,res:"2880×2160"},{name:"2.8K 16:9",w:23.76,h:13.37,res:"2880×1620"},{name:"2K 16:9",w:23.76,h:13.37,res:"2048×1152"},{name:"2K 4:3",w:23.76,h:17.82,res:"2048×1536"}]},
  {model:"ALEXA Plus 4:3", year:2012,modes:[{name:"2.8K 4:3",w:23.76,h:17.82,res:"2880×2160"},{name:"2.8K 16:9",w:23.76,h:13.37,res:"2880×1620"},{name:"Anamorphic 4:3",w:23.76,h:17.82,res:"2048×1536"}]},
  {model:"ALEXA M",        year:2012,modes:[{name:"2.8K Open Gate",w:23.76,h:17.82,res:"2880×2160"},{name:"2.8K 16:9",w:23.76,h:13.37,res:"2880×1620"},{name:"2K 16:9",w:23.76,h:13.37,res:"2048×1152"}]},
  {model:"ALEXA XT",       year:2013,modes:[{name:"3.2K Open Gate",w:23.76,h:17.82,res:"3168×2376"},{name:"2.8K 16:9",w:23.76,h:13.37,res:"2880×1620"},{name:"2K 16:9",w:23.76,h:13.37,res:"2048×1152"},{name:"2K 4:3",w:23.76,h:17.82,res:"2048×1536"}]},
  {model:"ALEXA XT Plus",  year:2013,modes:[{name:"3.2K Open Gate",w:23.76,h:17.82,res:"3168×2376"},{name:"4K UHD",w:23.76,h:13.37,res:"3840×2160"},{name:"2.8K 16:9",w:23.76,h:13.37,res:"2880×1620"},{name:"2K 16:9",w:23.76,h:13.37,res:"2048×1152"}]},
  {model:"ALEXA XT Studio",year:2013,modes:[{name:"3.2K Open Gate",w:23.76,h:17.82,res:"3168×2376"},{name:"ARRIRAW 3K",w:23.76,h:17.82,res:"3072×2304"},{name:"2.8K 16:9",w:23.76,h:13.37,res:"2880×1620"}]},
  {model:"AMIRA",          year:2014,modes:[{name:"3.4K Open Gate",w:28.17,h:18.13,res:"3424×2202"},{name:"4K UHD",w:23.76,h:13.37,res:"3840×2160"},{name:"2.8K S35",w:23.76,h:13.37,res:"2880×1620"},{name:"2K S35",w:23.76,h:13.37,res:"2048×1152"},{name:"1080p HD",w:23.76,h:13.37,res:"1920×1080"}]},
  {model:"ALEXA Mini",     year:2015,modes:[{name:"3.4K Open Gate",w:28.17,h:18.13,res:"3424×2202"},{name:"4K UHD",w:23.76,h:13.37,res:"3840×2160"},{name:"2.8K S35",w:23.76,h:13.37,res:"2880×1620"},{name:"2K S35",w:23.76,h:13.37,res:"2048×1152"},{name:"2K 4:3",w:23.76,h:17.82,res:"2048×1536"}]},
  {model:"ALEXA SXT",      year:2016,modes:[{name:"3.4K Open Gate",w:28.17,h:18.13,res:"3424×2202"},{name:"4K UHD",w:23.76,h:13.37,res:"3840×2160"},{name:"3K S35",w:23.76,h:17.82,res:"3072×2304"},{name:"2.8K S35",w:23.76,h:13.37,res:"2880×1620"}]},
  {model:"ALEXA SXT W",    year:2016,modes:[{name:"3.4K Open Gate",w:28.17,h:18.13,res:"3424×2202"},{name:"4K UHD",w:23.76,h:13.37,res:"3840×2160"},{name:"3K S35",w:23.76,h:17.82,res:"3072×2304"},{name:"2.8K S35",w:23.76,h:13.37,res:"2880×1620"}]},
  {model:"ALEXA LF",       year:2018,modes:[{name:"LF Open Gate 4.5K",w:36.70,h:25.54,res:"4448×3096"},{name:"LF 16:9 4.5K",w:31.68,h:17.82,res:"4448×2502"},{name:"LF 2.39:1",w:36.70,h:15.35,res:"4448×1856"},{name:"S35 4:3 3K",w:23.76,h:17.82,res:"3072×2304"},{name:"S35 4K UHD",w:23.76,h:13.37,res:"3840×2160"}]},
  {model:"ALEXA Mini LF",  year:2019,modes:[{name:"LF Open Gate 4.5K",w:36.70,h:25.54,res:"4448×3096"},{name:"LF 16:9",w:31.68,h:17.82,res:"4448×2502"},{name:"LF 2.39:1",w:36.70,h:15.35,res:"4448×1856"},{name:"S35 4:3 3K",w:23.76,h:17.82,res:"3072×2304"},{name:"S35 4K UHD",w:23.76,h:13.37,res:"3840×2160"}]},
  {model:"ALEXA 35",       year:2022,modes:[{name:"4.6K Open Gate",w:27.99,h:19.22,res:"4608×3164"},{name:"4.6K 16:9",w:26.67,h:14.17,res:"4608×2592"},{name:"4K S35 4:3",w:23.76,h:17.82,res:"4096×3072"},{name:"4K S35 16:9",w:23.76,h:13.37,res:"4096×2304"},{name:"4K UHD",w:23.76,h:13.37,res:"3840×2160"},{name:"2K S35",w:23.76,h:13.37,res:"2048×1152"}]},
],Sony:[
  {model:"VENICE 2",year:2022,modes:[{name:"FF 8.6K Open Gate",w:35.9,h:24.0,res:"8640×5760"},{name:"FF 8.6K 17:9",w:35.9,h:19.0,res:"8640×4592"},{name:"S35 4:3 5.8K",w:24.0,h:18.0,res:"5784×4320"},{name:"S35 6K 17:9",w:27.98,h:14.80,res:"6048×3192"},{name:"4K 17:9",w:24.0,h:12.68,res:"4096×2160"}]},
  {model:"VENICE",  year:2017,modes:[{name:"FF 6K Open Gate",w:36.0,h:24.0,res:"6048×4032"},{name:"FF 6K 17:9",w:36.0,h:19.0,res:"6048×3192"},{name:"S35 4:3",w:24.0,h:18.0,res:"4096×3072"},{name:"S35 17:9",w:24.0,h:12.68,res:"4096×2160"}]},
  {model:"BURANO",  year:2023,modes:[{name:"FF 8.6K Open Gate",w:35.9,h:24.0,res:"8640×5760"},{name:"FF 8.6K 17:9",w:35.9,h:19.0,res:"8640×4592"},{name:"S35 4K 17:9",w:23.4,h:13.16,res:"4096×2304"}]},
  {model:"FX9",     year:2019,modes:[{name:"FF 6K",w:35.6,h:23.8,res:"6048×4032"},{name:"S35 4K",w:23.6,h:13.3,res:"4096×2304"}]},
  {model:"FX6",     year:2020,modes:[{name:"FF 4K",w:35.6,h:23.8,res:"4096×2160"},{name:"S35 4K",w:23.6,h:13.3,res:"4096×2160"}]},
  {model:"FX3",     year:2021,modes:[{name:"FF 4K",w:35.6,h:23.8,res:"4096×2160"}]},
],RED:[
  {model:"V-RAPTOR 8K VV",  year:2022,modes:[{name:"8K FF 17:9",w:40.96,h:21.60,res:"8192×4320"},{name:"6K S35",w:29.90,h:15.77,res:"6144×3240"},{name:"5.1K 2.4:1",w:29.90,h:12.46,res:"5120×2140"},{name:"4K S35",w:19.89,h:10.50,res:"4096×2160"}]},
  {model:"V-RAPTOR [X] 8K", year:2023,modes:[{name:"8K FF 17:9",w:40.96,h:21.60,res:"8192×4320"},{name:"6K S35",w:29.90,h:15.77,res:"6144×3240"},{name:"4K S35",w:19.89,h:10.50,res:"4096×2160"}]},
  {model:"KOMODO 6K",        year:2020,modes:[{name:"6K S35 17:9",w:27.03,h:14.25,res:"6144×3240"},{name:"4K S35",w:18.02,h:9.51,res:"4096×2160"}]},
  {model:"KOMODO-X 6K",      year:2023,modes:[{name:"6K S35",w:27.03,h:14.25,res:"6144×3240"},{name:"4K S35",w:18.02,h:9.51,res:"4096×2160"}]},
  {model:"MONSTRO 8K VV",    year:2018,modes:[{name:"8K FF 17:9",w:40.96,h:21.60,res:"8192×4320"},{name:"6K S35",w:29.90,h:15.77,res:"6144×3240"},{name:"5K S35",w:24.92,h:13.14,res:"5120×2700"}]},
  {model:"HELIUM 8K S35",    year:2017,modes:[{name:"8K S35",w:29.90,h:15.77,res:"8192×4320"},{name:"6K S35",w:29.90,h:15.77,res:"6144×3240"},{name:"4K 2:1",w:29.90,h:14.95,res:"4096×2048"}]},
  {model:"GEMINI 5K S35",    year:2018,modes:[{name:"5K S35",w:30.72,h:18.00,res:"5120×3000"},{name:"4K S35",w:30.72,h:18.00,res:"4096×2400"}]},
]};

const LENSES={"ARRI/Zeiss":[
  {name:"Master Prime",      type:"Prime",      format:"S35",   focals:[12,14,16,18,21,25,27,32,35,40,50,65,75,100,135,150]},
  {name:"Ultra Prime",       type:"Prime",      format:"S35",   focals:[8,10,12,14,16,20,24,28,32,40,50,65,85,100,135,180]},
  {name:"Signature Prime",   type:"Prime",      format:"LF",    focals:[12,15,18,21,25,29,35,40,47,58,75,95,125,150,200,280]},
  {name:"Sig. Zoom 16-32",   type:"Zoom",       format:"LF",    focals:[16,18,20,22,24,26,28,30,32]},
  {name:"Sig. Zoom 45-135",  type:"Zoom",       format:"LF",    focals:[45,50,60,70,80,90,100,110,120,135]},
  {name:"Master Zoom 16-110",type:"Zoom",       format:"S35",   focals:[16,18,21,24,28,32,35,40,50,65,75,85,100,110]},
],"Cooke":[
  {name:"S4/i",              type:"Prime",      format:"S35",   focals:[12,14,16,18,21,25,27,32,35,40,50,65,75,100,135,150,180]},
  {name:"S7/i",              type:"Prime",      format:"LF/FF", focals:[18,25,32,40,50,65,75,100,135]},
  {name:"miniS4/i",          type:"Prime",      format:"S35",   focals:[18,21,25,32,40,50,65,75,100,135]},
  {name:"Panchro/i Classic", type:"Prime",      format:"S35",   focals:[18,25,32,50,75,100]},
  {name:"Anamorphic/i SF",   type:"Anamorphic", format:"S35",   focals:[32,40,50,65,75,100,135,180]},
],"Zeiss":[
  {name:"Supreme Prime",     type:"Prime",      format:"LF/FF", focals:[18,21,25,29,35,40,50,65,85,100,135,150,200]},
  {name:"Supreme Radiance",  type:"Prime",      format:"LF/FF", focals:[18,21,25,29,35,40,50,65,85,100,135,150,200]},
  {name:"CP.3",              type:"Prime",      format:"S35",   focals:[15,18,21,25,28,35,50,85,100,135]},
],"Leica":[
  {name:"Summicron-C",       type:"Prime",      format:"S35",   focals:[18,21,25,29,35,40,50,75,100,135]},
  {name:"Thalia",            type:"Prime",      format:"LF",    focals:[24,30,35,45,55,70,90,120,180]},
],"Angénieux":[
  {name:"Optimo 15-40",      type:"Zoom",       format:"S35",   focals:[15,17,20,24,28,32,35,40]},
  {name:"Optimo 24-290",     type:"Zoom",       format:"S35",   focals:[24,35,50,65,75,100,135,180,240,290]},
  {name:"EZ-1 30-90",        type:"Zoom",       format:"LF",    focals:[30,35,40,50,60,70,80,90]},
  {name:"EZ-2 22-60",        type:"Zoom",       format:"LF",    focals:[22,25,30,35,40,45,50,55,60]},
],"Fujinon":[
  {name:"Premista 19-45",    type:"Zoom",       format:"LF",    focals:[19,22,25,28,32,35,40,45]},
  {name:"Premista 28-100",   type:"Zoom",       format:"LF",    focals:[28,32,35,40,50,60,75,85,100]},
  {name:"Premista 80-250",   type:"Zoom",       format:"LF",    focals:[80,100,120,150,180,200,250]},
  {name:"Cabrio 14-35",      type:"Zoom",       format:"S35",   focals:[14,16,18,21,24,28,35]},
  {name:"Cabrio 19-90",      type:"Zoom",       format:"S35",   focals:[19,24,28,35,40,50,60,75,90]},
],"Panavision":[
  {name:"Primo Classic",     type:"Prime",      format:"S35",   focals:[14.5,17.5,21,24,27,29,35,40,50,55,65,75,85,100,125,150]},
  {name:"Primo Artiste",     type:"Prime",      format:"LF",    focals:[24,29,35,40,50,65,80,100,125,150]},
  {name:"Anamorphic E",      type:"Anamorphic", format:"S35",   focals:[28,35,40,50,60,75,85,100,125,150]},
  {name:"Zoom 24-275",       type:"Zoom",       format:"S35",   focals:[24,35,50,75,100,135,180,240,275]},
],"Canon":[
  {name:"Sumire Prime",      type:"Prime",      format:"FF",    focals:[14,20,24,35,50,85,135]},
  {name:"CN-E Prime",        type:"Prime",      format:"S35",   focals:[14,24,35,50,85,135]},
  {name:"CN7x17 Cine-Servo", type:"Zoom",       format:"S35",   focals:[17,20,24,35,50,75,120]},
  {name:"CN-E 30-300mm",     type:"Zoom",       format:"S35",   focals:[30,40,50,60,75,85,100,135,180,200,250,300]},
],"Sigma":[
  {name:"Cine FF High Speed",type:"Prime",      format:"FF",    focals:[14,20,24,35,40,50,85,105]},
  {name:"Cine S35",          type:"Prime",      format:"S35",   focals:[18,20,24,35,40,50,85,105]},
  {name:"Cine Zoom 18-35",   type:"Zoom",       format:"S35",   focals:[18,20,22,24,28,35]},
  {name:"Cine Zoom 50-100",  type:"Zoom",       format:"S35",   focals:[50,60,70,85,100]},
],"Atlas":[
  {name:"Orion Ana. 2x",     type:"Anamorphic", format:"S35",   focals:[32,40,50,65,80]},
  {name:"Mercury Ana. 1.5x", type:"Anamorphic", format:"LF",    focals:[24,32,40,50,65]},
]};

const ASPECT_RATIOS=[
  {label:"1.33:1",name:"Academy",     value:1.333},
  {label:"1.43:1",name:"IMAX 15p",    value:1.43 },
  {label:"1.78:1",name:"16:9",        value:1.778},
  {label:"1.85:1",name:"Flat",        value:1.85 },
  {label:"1.90:1",name:"IMAX Digital",value:1.90 },
  {label:"2.00:1",name:"Univisium",   value:2.0  },
  {label:"2.20:1",name:"70mm",        value:2.2  },
  {label:"2.35:1",name:"Scope",       value:2.35 },
  {label:"2.39:1",name:"Anamorphic",  value:2.39 },
  {label:"2.76:1",name:"Ultra Pan.",  value:2.76 },
];

// ─── LOCALSTORAGE KEYS ────────────────────────────────────────────────────────
const LS_SET  = 'op2_settings';
const LS_SHOT = 'op2_shots';
const MAX_SHOTS = 20;
const MAX_VIDEOS = 20;

// ─── STATE ────────────────────────────────────────────────────────────────────
const S={
  brand:"ARRI",camIdx:0,modeIdx:0,
  lensCategory:"ARRI/Zeiss",seriesIdx:0,focalIdx:0,
  arIdx:3,phoneFOV:65,fovSource:"auto",facingMode:"environment",
  overlays:{frame:true,frameLabel:false,safe:false,grid:false,cross:false,camera:true,lens:true,lensType:false,ar:true,horizon:false}
};
const getCam    =()=>CAMERAS[S.brand][S.camIdx];
const getMode   =()=>getCam().modes[S.modeIdx];
const getSeries =()=>LENSES[S.lensCategory][S.seriesIdx];
const getFocal  =()=>getSeries().focals[S.focalIdx];
const getAR     =()=>ASPECT_RATIOS[S.arIdx];
const getHFOV   =()=>2*Math.atan(getMode().w/(2*getFocal()))*(180/Math.PI);

// ─── PERSIST SETTINGS ─────────────────────────────────────────────────────────
function saveSettings(){
  try{
    localStorage.setItem(LS_SET,JSON.stringify({
      brand:S.brand,camIdx:S.camIdx,modeIdx:S.modeIdx,
      lensCategory:S.lensCategory,seriesIdx:S.seriesIdx,focalIdx:S.focalIdx,
      arIdx:S.arIdx,phoneFOV:S.phoneFOV,fovSource:S.fovSource,
      overlays:{...S.overlays}
    }));
  }catch(e){}
}

function loadSettings(){
  try{
    const raw=localStorage.getItem(LS_SET);
    if(!raw)return;
    const d=JSON.parse(raw);
    if(d.brand&&CAMERAS[d.brand]){
      S.brand=d.brand;
      if(CAMERAS[d.brand][d.camIdx])S.camIdx=d.camIdx;
      if(getCam().modes[d.modeIdx])S.modeIdx=d.modeIdx;
    }
    if(d.lensCategory&&LENSES[d.lensCategory]){
      S.lensCategory=d.lensCategory;
      if(LENSES[d.lensCategory][d.seriesIdx])S.seriesIdx=d.seriesIdx;
      if(getSeries().focals[d.focalIdx]!==undefined)S.focalIdx=d.focalIdx;
    }
    if(d.arIdx>=0&&d.arIdx<ASPECT_RATIOS.length)S.arIdx=d.arIdx;
    if(d.phoneFOV>=40&&d.phoneFOV<=105){S.phoneFOV=d.phoneFOV;S.fovSource=d.fovSource||'auto';}
    if(d.overlays)S.overlays={...S.overlays,...d.overlays};
  }catch(e){}
}

// ─── PERSIST SCREENSHOTS ──────────────────────────────────────────────────────
const screenshots=[];

function saveScreenshots(){
  try{
    const data=screenshots.slice(-MAX_SHOTS).map(s=>({dataUrl:s.dataUrl,meta:s.meta,filename:s.filename}));
    localStorage.setItem(LS_SHOT,JSON.stringify(data));
  }catch(e){
    // If quota exceeded, try with fewer
    try{
      const data=screenshots.slice(-3).map(s=>({dataUrl:s.dataUrl,meta:s.meta,filename:s.filename}));
      localStorage.setItem(LS_SHOT,JSON.stringify(data));
    }catch(e2){}
  }
}

function loadScreenshots(){
  try{
    const raw=localStorage.getItem(LS_SHOT);
    if(!raw)return;
    JSON.parse(raw).forEach(s=>screenshots.push(s));
    updateGalleryThumb();
  }catch(e){}
}

// ─── CANVAS / ORIENTATION ─────────────────────────────────────────────────────
const app   =document.getElementById('app');
const video =document.getElementById('video');
const canvas=document.getElementById('canvas');
const ctx   =canvas.getContext('2d');
const SIDE_W=88;
let DPR=1;
let noTextOverlay=false;

function getLandscapeDims(){const vw=window.innerWidth,vh=window.innerHeight;return vh>vw?{W:vh,H:vw}:{W:vw,H:vh};}

function applyLandscape(){
  const vw=window.innerWidth,vh=window.innerHeight,p=vh>vw;
  app.style.cssText=p
    ?`position:fixed;width:${vh}px;height:${vw}px;top:${(vh-vw)/2}px;left:-${(vh-vw)/2}px;transform:rotate(90deg);transform-origin:center center;overflow:hidden;`
    :'position:fixed;top:0;left:0;width:100%;height:100%;overflow:hidden;';
  resizeCanvas();
}

function resizeCanvas(){
  const{W,H}=getLandscapeDims();
  DPR=Math.min(window.devicePixelRatio||1,3);
  canvas.width=Math.round(W*DPR);
  canvas.height=Math.round(H*DPR);
  canvas.style.width=W+'px';
  canvas.style.height=H+'px';
}

window.addEventListener('resize',applyLandscape);
window.addEventListener('orientationchange',()=>setTimeout(applyLandscape,150));

// ─── AUTO FOV ─────────────────────────────────────────────────────────────────
function detectFOV(stream){
  if(S.fovSource==='manual')return; // respect manual override
  const track=stream.getVideoTracks()[0];if(!track)return;
  const label=(track.label||'').toLowerCase(),ua=navigator.userAgent;
  let v=null;
  if(/iphone|ipad/i.test(ua)){
    if(label.includes('ultra wide')||label.includes('ultra-wide'))v=100;
    else if(label.includes('telephoto')||label.includes('tele'))v=48;
    else if(label.includes('back')||label.includes('rear'))v=65;
    else if(label.includes('front')||label.includes('facetime'))v=62;
  }
  if(!v&&track.getCapabilities){try{const c=track.getCapabilities();if(c.zoom)v=(c.zoom.min||1)<=0.6?98:68;}catch(e){}}
  if(!v)v=/android/i.test(navigator.userAgent)?68:65;
  S.phoneFOV=v;
  const sl=$('fovSlider');if(sl)sl.value=v;
  const fv=$('fovVal');if(fv)fv.textContent=v+'°';
  buildFovPresets();updateFovStatus();
}
function updateFovStatus(){
  const el=$('fovStatus');if(!el)return;
  const auto=S.fovSource!=='manual';
  el.textContent=auto?'● AUTO  '+S.phoneFOV+'°':'● MANUAL  '+S.phoneFOV+'°';
  el.style.color=auto?'#34c759':'#FF9500';
}

// ─── CAMERA ───────────────────────────────────────────────────────────────────
async function startCamera(){
  try{
    if(video.srcObject)video.srcObject.getTracks().forEach(t=>t.stop());
    const stream=await navigator.mediaDevices.getUserMedia({
      video:{facingMode:S.facingMode,width:{ideal:3840,min:1280},height:{ideal:2160,min:720}}
    });
    video.srcObject=stream;video.play();detectFOV(stream);
  }catch(e){console.error('Camera:',e);}
}

// ─── BLACK SCREEN RECOVERY ────────────────────────────────────────────────────
function checkAndRestartCamera(){
  if(!video.srcObject||!video.srcObject.active||video.paused||video.readyState<2){
    setTimeout(startCamera,200);
  }
}
document.addEventListener('visibilitychange',()=>{
  if(document.visibilityState==='visible')checkAndRestartCamera();
});
window.addEventListener('pageshow',()=>checkAndRestartCamera());
window.addEventListener('focus',()=>setTimeout(checkAndRestartCamera,400));

// ─── RECORDING ────────────────────────────────────────────────────────────────
let mediaRecorder=null,recordedChunks=[],isRecording=false,recSecs=0,recTimer=null;
let recCanvas=null,recCtx=null,recRAF=null,recFX=0,recFY=0,recFW=0,recFH=0,recDPR2=1;
const REC_META_H=24;
const videos=[];

function toggleRecording(){
  if(!isRecording&&videos.length>=MAX_VIDEOS){showMemoryFull();return;}
  isRecording?stopRecording():startRecording();
}
function showMemoryFull(){
  const el=$('memoryFull');
  el.classList.add('show');
  setTimeout(()=>el.classList.remove('show'),3000);
}

function recDrawLoop(){
  if(!isRecording||!recCtx)return;
  const logW=canvas.width/DPR,logH=canvas.height/DPR;
  const rW=recFW,rH=recFH;
  recCtx.setTransform(recDPR2,0,0,recDPR2,0,0);
  recCtx.clearRect(0,0,rW,rH+REC_META_H);

  // Video (cropped to frame area, translated to 0,0)
  if(video.readyState>=2){
    const cinemaFOV=getHFOV();
    const vZoom=Math.tan(S.phoneFOV*Math.PI/360)/Math.tan(cinemaFOV*Math.PI/360);
    const nW=video.videoWidth||logW,nH=video.videoHeight||logH;
    const cov=Math.max(logW/nW,logH/nH);
    const dW=nW*cov*vZoom,dH=nH*cov*vZoom;
    recCtx.save();
    recCtx.beginPath();recCtx.rect(0,0,rW,rH);recCtx.clip();
    recCtx.drawImage(video,(logW-dW)/2-recFX,(logH-dH)/2-recFY,dW,dH);
    recCtx.restore();
  }

  // Overlays (same as main draw but at 0,0 coords, no info corners)
  if(S.overlays.frame){
    recCtx.strokeStyle=OG;recCtx.lineWidth=1.5;recCtx.strokeRect(0,0,rW,rH);
    const b=Math.min(rW,rH)*.055;recCtx.lineWidth=3;
    [[0,0,1,1],[rW,0,-1,1],[0,rH,1,-1],[rW,rH,-1,-1]].forEach(([x,y,dx,dy])=>{
      recCtx.beginPath();recCtx.moveTo(x,y+dy*b);recCtx.lineTo(x,y);recCtx.lineTo(x+dx*b,y);recCtx.stroke();
    });
  }
  if(S.overlays.frameLabel){
    const ar=getAR(),lbl=ar.label+'  '+ar.name.toUpperCase();
    const fs=Math.max(8,Math.min(10,rW/55));
    recCtx.font=`500 ${fs}px -apple-system,sans-serif`;
    const tw=recCtx.measureText(lbl).width,lx=(rW-tw)/2,ly=-5;
    if(ly+fs>0){recCtx.fillStyle='rgba(0,0,0,.55)';recCtx.fillRect(lx-5,ly-fs-1,tw+10,fs+5);recCtx.fillStyle=OG;recCtx.fillText(lbl,lx,ly);}
  }
  if(S.overlays.safe){
    recCtx.setLineDash([4,4]);recCtx.lineWidth=1;
    recCtx.strokeStyle='rgba(255,149,0,.45)';recCtx.strokeRect(rW*.05,rH*.05,rW*.9,rH*.9);
    recCtx.strokeStyle='rgba(255,149,0,.2)';recCtx.strokeRect(rW*.1,rH*.1,rW*.8,rH*.8);
    recCtx.setLineDash([]);
  }
  if(S.overlays.grid){
    recCtx.strokeStyle='rgba(255,255,255,.16)';recCtx.lineWidth=1;
    [1,2].forEach(i=>{
      recCtx.beginPath();recCtx.moveTo(rW*i/3,0);recCtx.lineTo(rW*i/3,rH);recCtx.stroke();
      recCtx.beginPath();recCtx.moveTo(0,rH*i/3);recCtx.lineTo(rW,rH*i/3);recCtx.stroke();
    });
  }
  if(S.overlays.cross){
    const cx=rW/2,cy=rH/2,r=Math.min(rW,rH)*.038;
    recCtx.strokeStyle='rgba(255,149,0,.85)';recCtx.lineWidth=1.5;
    recCtx.beginPath();recCtx.moveTo(cx-r,cy);recCtx.lineTo(cx-r*.26,cy);recCtx.stroke();
    recCtx.beginPath();recCtx.moveTo(cx+r*.26,cy);recCtx.lineTo(cx+r,cy);recCtx.stroke();
    recCtx.beginPath();recCtx.moveTo(cx,cy-r);recCtx.lineTo(cx,cy-r*.26);recCtx.stroke();
    recCtx.beginPath();recCtx.moveTo(cx,cy+r*.26);recCtx.lineTo(cx,cy+r);recCtx.stroke();
    recCtx.beginPath();recCtx.arc(cx,cy,r*.1,0,Math.PI*2);recCtx.stroke();
  }
  if(S.overlays.horizon){
    recCtx.strokeStyle='rgba(255,200,80,.4)';recCtx.lineWidth=1;recCtx.setLineDash([10,6]);
    recCtx.beginPath();recCtx.moveTo(0,rH/2);recCtx.lineTo(rW,rH/2);recCtx.stroke();
    recCtx.setLineDash([]);
  }

  // Metadata bar with live clock
  const now=new Date();
  const dateStr=`${String(now.getDate()).padStart(2,'0')}/${String(now.getMonth()+1).padStart(2,'0')}/${String(now.getFullYear()).slice(-2)}  ${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')}:${String(now.getSeconds()).padStart(2,'0')}`;
  recCtx.fillStyle='rgba(0,0,0,.9)';recCtx.fillRect(0,rH,rW,REC_META_H);
  const fs2=Math.max(8,Math.min(10,rW/80));
  recCtx.font=`bold ${fs2}px Courier New`;recCtx.fillStyle=OG;recCtx.textBaseline='middle';
  const my=rH+REC_META_H/2;
  const cam=getCam(),m=getMode(),s=getSeries(),f=getFocal(),ar=getAR(),cinemaFOV=getHFOV();
  const ml=`${S.brand} ${cam.model}  ${m.name}`;
  const mc=`${s.name}  ${f}mm  ${cinemaFOV.toFixed(1)}°`;
  const mr=`${ar.label}  ${dateStr}`;
  recCtx.fillText(ml,8,my);
  const cw=recCtx.measureText(mc).width;recCtx.fillText(mc,(rW-cw)/2,my);
  const rw2=recCtx.measureText(mr).width;recCtx.fillText(mr,rW-rw2-8,my);

  // REC dot
  const pulse=Math.floor(Date.now()/500)%2===0;
  recCtx.beginPath();recCtx.arc(rW-8,8,4,0,Math.PI*2);
  recCtx.fillStyle=pulse?'#FF3B30':'rgba(255,59,48,.3)';recCtx.fill();

  recRAF=requestAnimationFrame(recDrawLoop);
}

async function startRecording(){
  try{
    // Create recording canvas sized to frame only (no sidebar, no letterbox)
    const{fX,fY,fW,fH}=getFrameRect();
    recFX=fX;recFY=fY;recFW=fW;recFH=fH;
    recDPR2=Math.min(DPR,2);
    recCanvas=document.createElement('canvas');
    recCanvas.width=Math.round(fW*recDPR2);
    recCanvas.height=Math.round((fH+REC_META_H)*recDPR2);
    recCtx=recCanvas.getContext('2d');

    // Start render loop before captureStream
    isRecording=true;recSecs=0;
    recRAF=requestAnimationFrame(recDrawLoop);

    // Capture from recording canvas
    let stream=null;
    if(recCanvas.captureStream){
      try{stream=recCanvas.captureStream(30);}catch(e){}
    }
    if(!stream&&video.srcObject)stream=new MediaStream(video.srcObject.getVideoTracks());
    if(!stream){alert('Registrazione non disponibile.');isRecording=false;cancelAnimationFrame(recRAF);return;}
    if(video.srcObject)video.srcObject.getAudioTracks().forEach(t=>{try{stream.addTrack(t);}catch(e){}});

    const mimes=['video/mp4;codecs=avc1.42E01E,mp4a.40.2','video/mp4;codecs=avc1','video/mp4','video/webm;codecs=vp9,opus','video/webm;codecs=vp8,opus','video/webm',''];
    const mime=mimes.find(m2=>{if(!m2)return true;try{return MediaRecorder.isTypeSupported(m2);}catch(e){return false;}})||'';
    recordedChunks=[];
    const opts={videoBitsPerSecond:8000000};if(mime)opts.mimeType=mime;
    mediaRecorder=new MediaRecorder(stream,opts);
    mediaRecorder.ondataavailable=e=>{if(e.data&&e.data.size>0)recordedChunks.push(e.data);};
    mediaRecorder.onstop=()=>{
      cancelAnimationFrame(recRAF);recCtx=null;recCanvas=null;
      const finalMime=mediaRecorder.mimeType||'video/mp4';
      const ext=finalMime.includes('mp4')?'mp4':'webm';
      const blob=new Blob(recordedChunks,{type:finalMime});
      const blobUrl=URL.createObjectURL(blob);
      const now2=new Date();
      const ts=`${now2.getFullYear()}${String(now2.getMonth()+1).padStart(2,'0')}${String(now2.getDate()).padStart(2,'0')}_${String(now2.getHours()).padStart(2,'0')}${String(now2.getMinutes()).padStart(2,'0')}`;
      const dur=recSecs;
      const cam=getCam(),f=getFocal(),s=getSeries(),ar=getAR();
      const entry={
        blobUrl,blob,
        meta:`${S.brand} ${cam.model} | ${s.name} ${f}mm | ${ar.label}`,
        filename:`opticalpro_${S.brand}_${f}mm_${ar.label.replace(':','x')}_${ts}.${ext}`,
        duration:dur,mimeType:finalMime
      };
      generateVideoThumb(blobUrl).then(thumb=>{entry.thumbUrl=thumb;renderGalleryGrid();updateGalleryThumb();});
      videos.push(entry);
      updateGalleryThumb();
      isRecording=false;clearInterval(recTimer);recSecs=0;updateRecBtn();
    };
    mediaRecorder.onerror=e=>{console.error('MediaRecorder:',e);stopRecording();};
    mediaRecorder.start(500);
    recTimer=setInterval(()=>{recSecs++;updateRecBtn();},1000);
    updateRecBtn();
  }catch(e){
    console.error('startRecording:',e);
    isRecording=false;cancelAnimationFrame(recRAF);
    alert('Errore: '+e.message);
  }
}

function stopRecording(){
  if(mediaRecorder&&mediaRecorder.state!=='inactive')mediaRecorder.stop();
  clearInterval(recTimer);
}
function updateRecBtn(){$('recBtn').classList.toggle('recording',isRecording);}

function generateVideoThumb(blobUrl){
  return new Promise(resolve=>{
    const v=document.createElement('video');
    v.src=blobUrl;v.muted=true;v.playsInline=true;
    v.addEventListener('loadeddata',()=>{
      v.currentTime=0.1;
      v.addEventListener('seeked',()=>{
        try{
          const c=document.createElement('canvas');c.width=160;c.height=90;
          c.getContext('2d').drawImage(v,0,0,160,90);
          resolve(c.toDataURL('image/jpeg',.7));
        }catch(e){resolve(null);}
      },{once:true});
    },{once:true});
    v.addEventListener('error',()=>resolve(null),{once:true});
    setTimeout(()=>resolve(null),4000);
  });
}

function fmtDur(s){return`${String(Math.floor(s/60)).padStart(2,'0')}:${String(s%60).padStart(2,'0')}`;}


// ─── DRAW ─────────────────────────────────────────────────────────────────────
const OG='#FF9500';

function getFrameRect(){
  const logW=canvas.width/DPR,logH=canvas.height/DPR,ar=getAR();
  const availW=logW-SIDE_W;
  let fW=availW,fH=fW/ar.value;
  if(fH>logH){fH=logH;fW=fH*ar.value;}
  return{fX:(availW-fW)/2,fY:(logH-fH)/2,fW,fH,logW,logH};
}

function draw(){
  const{fX,fY,fW,fH,logW,logH}=getFrameRect();
  const ar=getAR(),cinemaFOV=getHFOV();
  ctx.setTransform(DPR,0,0,DPR,0,0);
  ctx.clearRect(0,0,logW,logH);

  const vZoom=Math.tan(S.phoneFOV*Math.PI/360)/Math.tan(cinemaFOV*Math.PI/360);

  // BG
  ctx.fillStyle='#050505';ctx.fillRect(0,0,logW,logH);

  // Video
  if(video.readyState>=2){
    const vW=video.videoWidth||logW,vH=video.videoHeight||logH;
    ctx.save();ctx.beginPath();ctx.rect(fX,fY,fW,fH);ctx.clip();
    if(vH>vW){
      // Stream in portrait: ruota -90° per riempire correttamente il canvas landscape
      const scale=Math.max(logH/vW,logW/vH)*vZoom;
      const dW=vW*scale,dH=vH*scale;
      ctx.save();ctx.translate(logW/2,logH/2);ctx.rotate(-Math.PI/2);
      ctx.drawImage(video,-dW/2,-dH/2,dW,dH);
      ctx.restore();
    } else {
      const cov=Math.max(logW/vW,logH/vH);
      const dW=vW*cov*vZoom,dH=vH*cov*vZoom;
      ctx.drawImage(video,(logW-dW)/2,(logH-dH)/2,dW,dH);
    }
    ctx.restore();
  }

  // Wide FOV indicator
  if(vZoom<1){
    ctx.save();ctx.beginPath();ctx.rect(fX,fY,fW,fH);ctx.clip();
    ctx.fillStyle='rgba(255,149,0,.03)';ctx.fillRect(fX,fY,fW,fH);
    const pW=fW*vZoom,pH=fH*vZoom,pX=fX+(fW-pW)/2,pY=fY+(fH-pH)/2;
    ctx.setLineDash([5,5]);ctx.strokeStyle='rgba(255,149,0,.3)';ctx.lineWidth=1;
    ctx.strokeRect(pX,pY,pW,pH);ctx.setLineDash([]);
    ctx.font='bold 9px Courier New';ctx.fillStyle='rgba(255,149,0,.45)';
    ctx.fillText('PHONE FOV LIMIT  '+S.phoneFOV+'°',pX+6,pY-5);
    ctx.restore();
  }

  // Letterbox
  ctx.fillStyle='rgba(0,0,0,.88)';
  if(fY>0){ctx.fillRect(0,0,logW,fY);ctx.fillRect(0,fY+fH,logW,logH-fY-fH);}
  if(fX>0){ctx.fillRect(0,fY,fX,fH);ctx.fillRect(fX+fW,fY,logW-fX-fW,fH);}

  // Frame line label
  if(S.overlays.frameLabel&&fY>14){
    const lbl=ar.label+'  '+ar.name.toUpperCase();
    const fs=Math.max(9,Math.min(11,fW/50));
    ctx.font=`500 ${fs}px -apple-system,sans-serif`;
    const tw=ctx.measureText(lbl).width,lx=fX+(fW-tw)/2,ly=fY-7;
    ctx.fillStyle='rgba(0,0,0,.55)';ctx.fillRect(lx-5,ly-fs-1,tw+10,fs+5);
    ctx.fillStyle=OG;ctx.fillText(lbl,lx,ly);
  }

  // Frame + brackets
  if(S.overlays.frame){
    ctx.strokeStyle=OG;ctx.lineWidth=1.5;ctx.strokeRect(fX,fY,fW,fH);
    const b=Math.min(fW,fH)*.055;ctx.lineWidth=3;
    [[fX,fY,1,1],[fX+fW,fY,-1,1],[fX,fY+fH,1,-1],[fX+fW,fY+fH,-1,-1]].forEach(([x,y,dx,dy])=>{
      ctx.beginPath();ctx.moveTo(x,y+dy*b);ctx.lineTo(x,y);ctx.lineTo(x+dx*b,y);ctx.stroke();
    });
  }

  // Safe areas
  if(S.overlays.safe){
    ctx.setLineDash([4,4]);ctx.lineWidth=1;
    ctx.strokeStyle='rgba(255,149,0,.45)';ctx.strokeRect(fX+fW*.05,fY+fH*.05,fW*.9,fH*.9);
    ctx.strokeStyle='rgba(255,149,0,.2)';ctx.strokeRect(fX+fW*.1,fY+fH*.1,fW*.8,fH*.8);
    ctx.setLineDash([]);
  }

  // Grid
  if(S.overlays.grid){
    ctx.strokeStyle='rgba(255,255,255,.16)';ctx.lineWidth=1;
    [1,2].forEach(i=>{
      ctx.beginPath();ctx.moveTo(fX+fW*i/3,fY);ctx.lineTo(fX+fW*i/3,fY+fH);ctx.stroke();
      ctx.beginPath();ctx.moveTo(fX,fY+fH*i/3);ctx.lineTo(fX+fW,fY+fH*i/3);ctx.stroke();
    });
  }

  // Crosshair
  if(S.overlays.cross){
    const cx=fX+fW/2,cy=fY+fH/2,r=Math.min(fW,fH)*.038;
    ctx.strokeStyle='rgba(255,149,0,.85)';ctx.lineWidth=1.5;
    ctx.beginPath();ctx.moveTo(cx-r,cy);ctx.lineTo(cx-r*.26,cy);ctx.stroke();
    ctx.beginPath();ctx.moveTo(cx+r*.26,cy);ctx.lineTo(cx+r,cy);ctx.stroke();
    ctx.beginPath();ctx.moveTo(cx,cy-r);ctx.lineTo(cx,cy-r*.26);ctx.stroke();
    ctx.beginPath();ctx.moveTo(cx,cy+r*.26);ctx.lineTo(cx,cy+r);ctx.stroke();
    ctx.beginPath();ctx.arc(cx,cy,r*.1,0,Math.PI*2);ctx.stroke();
  }

  // Horizon
  if(S.overlays.horizon){
    ctx.strokeStyle='rgba(255,200,80,.4)';ctx.lineWidth=1;ctx.setLineDash([10,6]);
    ctx.beginPath();ctx.moveTo(fX,fY+fH/2);ctx.lineTo(fX+fW,fY+fH/2);ctx.stroke();
    ctx.setLineDash([]);
  }

  // Info corners
  if(!noTextOverlay){
    const cam=getCam(),m=getMode(),f=getFocal();
    const fs=Math.max(9,Math.min(11,fW/52)),pad=8;
    ctx.font=`bold ${fs}px 'Courier New',monospace`;ctx.fillStyle=OG;
    if(S.overlays.camera){
      ctx.fillText(`${S.brand} ${cam.model}`,fX+pad,fY+fs+pad);
      ctx.fillText(m.name,fX+pad,fY+fs*2.3+pad);
    }
    if(S.overlays.lens||S.overlays.lensType){
      const rt=`${f}mm  ${cinemaFOV.toFixed(1)}°`;
      ctx.fillText(rt,fX+fW-ctx.measureText(rt).width-pad,fY+fs+pad);
    }
    if(S.overlays.lens){
      ctx.fillText(getSeries().name,fX+pad,fY+fH-pad);
    }
    if(S.overlays.lensType){
      const lt=getSeries().type;
      ctx.fillText(lt,fX+pad,fY+fH-(S.overlays.lens?fs*1.5+pad:pad));
    }
    if(S.overlays.ar){
      const arLbl=getAR().label;
      ctx.fillText(arLbl,fX+fW-ctx.measureText(arLbl).width-pad,fY+fH-pad);
    }
  }

  // REC indicator
  if(isRecording){
    const mins=String(Math.floor(recSecs/60)).padStart(2,'0');
    const secs=String(recSecs%60).padStart(2,'0');
    const pulse=Math.floor(Date.now()/500)%2===0;
    ctx.font=`bold 11px 'Courier New',monospace`;
    const recW=ctx.measureText('00:00').width+14;
    const rx=fX+(fW-recW)/2,ry=fY+8;
    ctx.fillStyle='rgba(0,0,0,.6)';ctx.fillRect(rx-2,ry,recW+4,16);
    ctx.beginPath();ctx.arc(rx+8,ry+8,4,0,Math.PI*2);
    ctx.fillStyle=pulse?'#FF3B30':'rgba(255,59,48,.3)';ctx.fill();
    ctx.fillStyle='#FF3B30';ctx.fillText(`${mins}:${secs}`,rx+16,ry+11);
  }

  requestAnimationFrame(draw);
}

// ─── SCREENSHOT ───────────────────────────────────────────────────────────────
function captureScreenshot(){
  if(screenshots.length>=MAX_SHOTS){showMemoryFull();return;}
  noTextOverlay=true;
  requestAnimationFrame(()=>requestAnimationFrame(()=>{doCapture();noTextOverlay=false;}));
}

function doCapture(){
  const{fX,fY,fW,fH}=getFrameRect();
  const metaH=28,pFX=fX*DPR,pFY=fY*DPR,pFW=fW*DPR,pFH=fH*DPR,pMH=metaH*DPR;
  const tmp=document.createElement('canvas');
  tmp.width=Math.round(pFW);tmp.height=Math.round(pFH+pMH);
  const tc=tmp.getContext('2d');
  tc.drawImage(canvas,Math.round(pFX),Math.round(pFY),Math.round(pFW),Math.round(pFH),0,0,Math.round(pFW),Math.round(pFH));
  const cam=getCam(),m=getMode(),s=getSeries(),f=getFocal(),ar=getAR();
  tc.fillStyle='rgba(0,0,0,.9)';tc.fillRect(0,Math.round(pFH),Math.round(pFW),Math.round(pMH));
  const fs=Math.round(10*DPR);tc.font=`bold ${fs}px Courier New`;tc.fillStyle='#FF9500';tc.textBaseline='middle';
  const my=Math.round(pFH)+Math.round(pMH)/2;
  const left=`${S.brand} ${cam.model}  ${m.name}`;
  const center=`${s.name}  ${f}mm  ${getHFOV().toFixed(1)}°`;
  const now=new Date();
  const dateStr=`${String(now.getDate()).padStart(2,'0')}/${String(now.getMonth()+1).padStart(2,'0')}/${String(now.getFullYear()).slice(-2)}  ${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')}`;
  const right=`${ar.label}  ${dateStr}`;
  tc.fillText(left,Math.round(8*DPR),my);
  const cw=tc.measureText(center).width;tc.fillText(center,(Math.round(pFW)-cw)/2,my);
  const rw=tc.measureText(right).width;tc.fillText(right,Math.round(pFW)-rw-Math.round(8*DPR),my);
  const dataUrl=tmp.toDataURL('image/jpeg',.88);
  const ts=`${now.getFullYear()}${String(now.getMonth()+1).padStart(2,'0')}${String(now.getDate()).padStart(2,'0')}_${String(now.getHours()).padStart(2,'0')}${String(now.getMinutes()).padStart(2,'0')}${String(now.getSeconds()).padStart(2,'0')}`;
  const shot={dataUrl,meta:`${S.brand} ${cam.model} | ${s.name} ${f}mm | ${ar.label}`,filename:`opticalpro_${S.brand}_${f}mm_${ar.label.replace(':','x')}_${ts}.jpg`};
  screenshots.push(shot);saveScreenshots();updateGalleryThumb();
  const fl=$('shotFlash');fl.classList.add('show');setTimeout(()=>fl.classList.remove('show'),150);
}

function updateGalleryThumb(){
  const cont=$('gallContainer'),thumb=$('gallThumb'),count=$('gallCount');
  const total=screenshots.length+videos.length;
  // Show latest item: prefer video thumb, then last screenshot
  const src=(videos.length>0&&videos[videos.length-1].thumbUrl)
    ? videos[videos.length-1].thumbUrl
    : (screenshots.length>0 ? screenshots[screenshots.length-1].dataUrl : null);
  if(src){thumb.src=src;thumb.style.display='block';cont.classList.remove('empty');}
  else{thumb.style.display='none';cont.classList.add('empty');}
  count.textContent=total;count.style.display=total>0?'block':'none';
}

// ─── SAVE TO PHOTOS ───────────────────────────────────────────────────────────
async function saveToPhotos(dataUrl,filename){
  try{
    if(navigator.share&&navigator.canShare){
      const res=await fetch(dataUrl);
      const blob=await res.blob();
      const file=new File([blob],filename,{type:'image/jpeg'});
      if(navigator.canShare({files:[file]})){
        await navigator.share({files:[file],title:'Optical Pro'});
        return;
      }
    }
  }catch(e){if(e.name==='AbortError')return;}
  // Fallback download
  const a=document.createElement('a');a.href=dataUrl;a.download=filename;a.click();
}

// ─── GALLERY ──────────────────────────────────────────────────────────────────
let gallTab='foto';

function openGallery(){
  renderGalleryGrid();
  $('gallBack').classList.add('open');
  $('gallModal').classList.add('open');
}
function closeGallery(){$('gallBack').classList.remove('open');$('gallModal').classList.remove('open');}

function switchGallTab(tab,btn){
  gallTab=tab;
  document.querySelectorAll('.gall-tab').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  renderGalleryGrid();
}

function renderGalleryGrid(){
  const grid=$('gallGrid');
  const isFoto=gallTab==='foto';
  const items=isFoto?screenshots:videos;
  $('gallTotal').textContent=items.length?(items.length+(isFoto?' foto':' video')):'';

  if(!items.length){
    grid.innerHTML=`<div class="gall-empty">Nessun ${isFoto?'screenshot':'video'}.<br>${isFoto?'Usa ⊙':'Usa ⏺'} per catturare.</div>`;
    return;
  }

  if(isFoto){
    grid.innerHTML=items.map((s,i)=>`
      <div class="gitem" onclick="openViewer('foto',${i})">
        <img src="${s.dataUrl}" loading="lazy">
        <div class="gitem-meta">${s.meta}</div>
        <button class="gitem-del" onclick="event.stopPropagation();deleteShot(${i})">&#x2715;</button>
      </div>`).join('');
  } else {
    grid.innerHTML=items.map((v,i)=>`
      <div class="gitem" onclick="openViewer('video',${i})">
        <div class="vid-thumb-wrap">
          ${v.thumbUrl?`<img src="${v.thumbUrl}">`:''}
          <div class="vid-play">&#x25B6;</div>
          <div class="vid-dur">${fmtDur(v.duration)}</div>
        </div>
        <div class="gitem-meta">${v.meta}</div>
        <button class="gitem-del" onclick="event.stopPropagation();deleteVideo(${i})">&#x2715;</button>
      </div>`).join('');
  }
}

function deleteShot(i){screenshots.splice(i,1);saveScreenshots();updateGalleryThumb();renderGalleryGrid();}
function deleteVideo(i){
  URL.revokeObjectURL(videos[i].blobUrl);
  videos.splice(i,1);
  updateGalleryThumb();
  renderGalleryGrid();
}

// ─── VIEWER ───────────────────────────────────────────────────────────────────
let viewerType='foto',viewerIdx=0,vTouchX=0;

function openViewer(type,i){
  viewerType=type;viewerIdx=i;
  renderViewer();
  closeGallery();
  $('viewerWrap').classList.add('open');
}
function closeViewer(){
  const vid=$('viewerVid');if(vid){vid.pause();vid.src='';}
  $('viewerWrap').classList.remove('open');
}
function deleteCurrentItem(){
  if(viewerType==='foto'){
    deleteShot(viewerIdx);
    const items=screenshots;
    if(!items.length){closeViewer();return;}
    viewerIdx=Math.min(viewerIdx,items.length-1);
    renderViewer();
  } else {
    deleteVideo(viewerIdx);
    const items=videos;
    if(!items.length){closeViewer();return;}
    viewerIdx=Math.min(viewerIdx,items.length-1);
    renderViewer();
  }
}
function renderViewer(){
  const items=viewerType==='foto'?screenshots:videos;
  const item=items[viewerIdx];
  const img=$('viewerImg'),vid=$('viewerVid');
  if(viewerType==='video'){
    img.style.display='none';vid.style.display='block';
    vid.src=item.blobUrl;
  } else {
    vid.pause();vid.src='';vid.style.display='none';
    img.style.display='block';img.src=item.dataUrl;
  }
  $('viewerMeta').textContent=item.meta;
  $('viewerCounter').textContent=`${viewerIdx+1} / ${items.length}`;
  $('viewerPrevBtn').disabled=viewerIdx===0;
  $('viewerNextBtn').disabled=viewerIdx===items.length-1;
}
function viewerStep(d){
  const items=viewerType==='foto'?screenshots:videos;
  viewerIdx=Math.max(0,Math.min(items.length-1,viewerIdx+d));
  renderViewer();
}
function onVTouchStart(e){vTouchX=e.touches[0].clientX;}
function onVTouchEnd(e){const dx=e.changedTouches[0].clientX-vTouchX;if(Math.abs(dx)>50)viewerStep(dx<0?1:-1);}

async function saveCurrentItem(){
  if(viewerType==='video'){
    const v=videos[viewerIdx];
    try{
      if(navigator.share&&navigator.canShare){
        const file=new File([v.blob],v.filename,{type:v.mimeType});
        if(navigator.canShare({files:[file]})){await navigator.share({files:[file],title:'Optical Pro'});return;}
      }
    }catch(e){if(e.name==='AbortError')return;}
    const a=document.createElement('a');a.href=v.blobUrl;a.download=v.filename;a.click();
  } else {
    const s=screenshots[viewerIdx];
    saveToPhotos(s.dataUrl,s.filename);
  }
}

// ─── SETTINGS MODAL ───────────────────────────────────────────────────────────
function openSettings(){$('settBack').classList.add('open');$('settModal').classList.add('open');}
function closeSettings(){$('settBack').classList.remove('open');$('settModal').classList.remove('open');}

// ─── UI BUILDERS ─────────────────────────────────────────────────────────────
const $=id=>document.getElementById(id);
function buildBrandChips(){$('brandChips').innerHTML=Object.keys(CAMERAS).map(b=>`<button class="chip${b===S.brand?' active':''}" onclick="setBrand('${b}')">${b}</button>`).join('');}
function buildCamSel(){$('camSel').innerHTML=CAMERAS[S.brand].map((c,i)=>`<option value="${i}"${i===S.camIdx?' selected':''}>${c.model} (${c.year})</option>`).join('');}
function buildModeSel(){$('modeSel').innerHTML=getCam().modes.map((m,i)=>`<option value="${i}"${i===S.modeIdx?' selected':''}>${m.name}  ${m.res}</option>`).join('');}
function buildSensorMeta(){const m=getMode();$('sensorMeta').innerHTML=`Sensore <span>${m.w} × ${m.h} mm</span>`;}
function buildLensBrandChips(){$('lensBrandChips').innerHTML=Object.keys(LENSES).map(c=>`<button class="chip${c===S.lensCategory?' active':''}" style="font-size:10px" onclick="setLensCat('${c}')">${c}</button>`).join('');}
function buildSeriesSel(){$('seriesSel').innerHTML=LENSES[S.lensCategory].map((s,i)=>`<option value="${i}"${i===S.seriesIdx?' selected':''}>[${s.type}] ${s.name}  (${s.format})</option>`).join('');}
function buildFocalChips(){$('focalChips').innerHTML=getSeries().focals.map((f,i)=>`<button class="chip${i===S.focalIdx?' active':''}" onclick="setFocalIdx(${i})">${f}</button>`).join('');}
function buildARChips(){$('arChips').innerHTML=ASPECT_RATIOS.map((a,i)=>`<button class="chip${i===S.arIdx?' active':''}" onclick="setAR(${i})">${a.label}</button>`).join('');}
function buildLensMeta(){const m=getMode();$('lensMeta').innerHTML=`HFOV <span>${getHFOV().toFixed(1)}°</span>  &nbsp; Sensore <span>${m.w}×${m.h}mm</span>`;}
function buildOverlayChips(){
  const defs=[{k:'frame',l:'Frame'},{k:'frameLabel',l:'Frame Line'},{k:'safe',l:'Safe Area'},{k:'grid',l:'Grid 3×3'},{k:'cross',l:'Crosshair'},{k:'horizon',l:'Horizon'},{k:'camera',l:'Camera'},{k:'lens',l:'Lens'},{k:'ar',l:'A. Ratio'}];
  $('overlayChips').innerHTML=defs.map(d=>`<button class="ov-chip${S.overlays[d.k]?' active':''}" onclick="toggleOv('${d.k}')">${d.l}</button>`).join('');
}
function buildFovPresets(){
  const p=[['iPhone Wide',65],['iPhone UW',100],['iPhone 2x',48],['Android',68]];
  $('fovPresets').innerHTML=p.map(([l,v])=>`<button class="chip${S.phoneFOV===v?' active':''}" style="font-size:10px" onclick="setFovPreset(${v})">${l}</button>`).join('');
}
function updateSidebar(){
  const cam=getCam(),m=getMode(),s=getSeries(),f=getFocal();
  $('sCamName').textContent=cam.model;
  $('sModeName').textContent=m.name;
  $('sSeriesName').textContent=s.name;
  $('sNavFocalNum').textContent=f;
  $('btnPrev').disabled=S.focalIdx===0;
  $('btnNext').disabled=S.focalIdx===s.focals.length-1;
}
function buildAll(){
  buildBrandChips();buildCamSel();buildModeSel();buildSensorMeta();
  buildLensBrandChips();buildSeriesSel();buildFocalChips();buildARChips();buildLensMeta();
  buildOverlayChips();buildFovPresets();updateFovStatus();updateSidebar();
  const sl=$('fovSlider');if(sl)sl.value=S.phoneFOV;
  const fv=$('fovVal');if(fv)fv.textContent=S.phoneFOV+'°';
}

// ─── HANDLERS ─────────────────────────────────────────────────────────────────
function switchTab(n,btn){document.querySelectorAll('.tab-pane').forEach(p=>p.classList.remove('active'));document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));$(('pane-'+n)).classList.add('active');btn.classList.add('active');}
function setBrand(b){S.brand=b;S.camIdx=0;S.modeIdx=0;buildBrandChips();buildCamSel();buildModeSel();buildSensorMeta();buildLensMeta();updateSidebar();saveSettings();}
function onCamChange(){S.camIdx=+$('camSel').value;S.modeIdx=0;buildModeSel();buildSensorMeta();buildLensMeta();updateSidebar();saveSettings();}
function onModeChange(){S.modeIdx=+$('modeSel').value;buildSensorMeta();buildLensMeta();updateSidebar();saveSettings();}
function setLensCat(c){S.lensCategory=c;S.seriesIdx=0;S.focalIdx=0;buildLensBrandChips();buildSeriesSel();buildFocalChips();buildLensMeta();updateSidebar();saveSettings();}
function onSeriesChange(){S.seriesIdx=+$('seriesSel').value;S.focalIdx=0;buildFocalChips();buildLensMeta();updateSidebar();saveSettings();}
function setFocalIdx(i){S.focalIdx=i;buildFocalChips();buildLensMeta();updateSidebar();saveSettings();}
function prevFocalEv(e){e.stopPropagation();if(S.focalIdx>0){S.focalIdx--;buildFocalChips();buildLensMeta();updateSidebar();saveSettings();}}
function nextFocalEv(e){e.stopPropagation();const s=getSeries();if(S.focalIdx<s.focals.length-1){S.focalIdx++;buildFocalChips();buildLensMeta();updateSidebar();saveSettings();}}
function setAR(i){S.arIdx=i;buildARChips();updateSidebar();saveSettings();}
function toggleOv(k){S.overlays[k]=!S.overlays[k];buildOverlayChips();saveSettings();}
function onFovChange(){S.phoneFOV=+$('fovSlider').value;S.fovSource='manual';$('fovVal').textContent=S.phoneFOV+'°';buildFovPresets();updateFovStatus();saveSettings();}
function setFovPreset(v){S.phoneFOV=v;S.fovSource='manual';$('fovSlider').value=v;$('fovVal').textContent=v+'°';buildFovPresets();updateFovStatus();saveSettings();}
function resetFovAuto(){S.fovSource='auto';if(video.srcObject)detectFOV(video.srcObject);}

// ─── LAUNCH ───────────────────────────────────────────────────────────────────
(function(){
  loadSettings(); // restore before UI build
  const splash=document.getElementById('splash');
  app.style.display='block';
  applyLandscape();
  buildAll();
  loadScreenshots();
  startCamera();
  draw();
  setTimeout(()=>splash.classList.add('rotate'),2000);
  setTimeout(()=>splash.classList.add('fade'),5200);
  setTimeout(()=>splash.style.display='none',5900);
})();
