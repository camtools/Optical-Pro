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

const LENSES={
  "Angénieux":[
  {name:"Optimo 15-40",      type:"Zoom",       format:"S35",   focals:[15,17,20,24,28,32,35,40]},
  {name:"Optimo 24-290",     type:"Zoom",       format:"S35",   focals:[24,35,50,65,75,100,135,180,240,290]},
  {name:"EZ-1 30-90",        type:"Zoom",       format:"LF",    focals:[30,35,40,50,60,70,80,90]},
  {name:"EZ-2 22-60",        type:"Zoom",       format:"LF",    focals:[22,25,30,35,40,45,50,55,60]},
],
  "ARRI/Zeiss":[
  {name:"Master Prime",      type:"Prime",      format:"S35",   focals:[12,14,16,18,21,25,27,32,35,40,50,65,75,100,135,150]},
  {name:"Ultra Prime",       type:"Prime",      format:"S35",   focals:[8,10,12,14,16,20,24,28,32,40,50,65,85,100,135,180]},
  {name:"Signature Prime",   type:"Prime",      format:"LF",    focals:[12,15,18,21,25,29,35,40,47,58,75,95,125,150,200,280]},
  {name:"Sig. Zoom 16-32",   type:"Zoom",       format:"LF",    focals:[16,18,20,22,24,26,28,30,32]},
  {name:"Sig. Zoom 45-135",  type:"Zoom",       format:"LF",    focals:[45,50,60,70,80,90,100,110,120,135]},
  {name:"Master Zoom 16-110",type:"Zoom",       format:"S35",   focals:[16,18,21,24,28,32,35,40,50,65,75,85,100,110]},
],
  "Atlas":[
  {name:"Orion Ana. 2x",     type:"Anamorphic", squeeze:2, format:"S35",   focals:[32,40,50,65,80]},
  {name:"Mercury Ana. 1.5x", type:"Anamorphic", squeeze:1.5, format:"LF",    focals:[24,32,40,50,65]},
],
  "Canon":[
  {name:"Sumire Prime",      type:"Prime",      format:"FF",    focals:[14,20,24,35,50,85,135]},
  {name:"CN-E Prime",        type:"Prime",      format:"S35",   focals:[14,24,35,50,85,135]},
  {name:"CN7x17 Cine-Servo", type:"Zoom",       format:"S35",   focals:[17,20,24,35,50,75,120]},
  {name:"CN-E 30-300mm",     type:"Zoom",       format:"S35",   focals:[30,40,50,60,75,85,100,135,180,200,250,300]},
],
  "Cooke":[
  {name:"S4/i",              type:"Prime",      format:"S35",   focals:[12,14,16,18,21,25,27,32,35,40,50,65,75,100,135,150,180]},
  {name:"S7/i",              type:"Prime",      format:"LF/FF", focals:[18,25,32,40,50,65,75,100,135]},
  {name:"miniS4/i",          type:"Prime",      format:"S35",   focals:[18,21,25,32,40,50,65,75,100,135]},
  {name:"Panchro/i Classic", type:"Prime",      format:"S35",   focals:[18,25,32,50,75,100]},
  {name:"Anamorphic/i SF",   type:"Anamorphic", squeeze:2, format:"S35",   focals:[32,40,50,65,75,100,135,180]},
],
    "Fujinon":[
  {name:"Premista 19-45",    type:"Zoom",       format:"LF",    focals:[19,22,25,28,32,35,40,45]},
  {name:"Premista 28-100",   type:"Zoom",       format:"LF",    focals:[28,32,35,40,50,60,75,85,100]},
  {name:"Premista 80-250",   type:"Zoom",       format:"LF",    focals:[80,100,120,150,180,200,250]},
  {name:"Cabrio 14-35",      type:"Zoom",       format:"S35",   focals:[14,16,18,21,24,28,35]},
  {name:"Cabrio 19-90",      type:"Zoom",       format:"S35",   focals:[19,24,28,35,40,50,60,75,90]},
],
  "Leica":[
  {name:"Summicron-C",       type:"Prime",      format:"S35",   focals:[18,21,25,29,35,40,50,75,100,135]},
  {name:"Thalia",            type:"Prime",      format:"LF",    focals:[24,30,35,45,55,70,90,120,180]},
],
  "Panavision":[
  {name:"Primo Classic",     type:"Prime",      format:"S35",   focals:[14.5,17.5,21,24,27,29,35,40,50,55,65,75,85,100,125,150]},
  {name:"Primo Artiste",     type:"Prime",      format:"LF",    focals:[24,29,35,40,50,65,80,100,125,150]},
  {name:"Anamorphic E",      type:"Anamorphic", squeeze:2, format:"S35",   focals:[28,35,40,50,60,75,85,100,125,150]},
  {name:"Zoom 24-275",       type:"Zoom",       format:"S35",   focals:[24,35,50,75,100,135,180,240,275]},
],
  "Sigma":[
  {name:"Cine FF High Speed",type:"Prime",      format:"FF",    focals:[14,20,24,35,40,50,85,105]},
  {name:"Cine S35",          type:"Prime",      format:"S35",   focals:[18,20,24,35,40,50,85,105]},
  {name:"Cine Zoom 18-35",   type:"Zoom",       format:"S35",   focals:[18,20,22,24,28,35]},
  {name:"Cine Zoom 50-100",  type:"Zoom",       format:"S35",   focals:[50,60,70,85,100]},
],
"Zeiss":[
  {name:"Supreme Prime",     type:"Prime",      format:"LF/FF", focals:[18,21,25,29,35,40,50,65,85,100,135,150,200]},
  {name:"Supreme Radiance",  type:"Prime",      format:"LF/FF", focals:[18,21,25,29,35,40,50,65,85,100,135,150,200]},
  {name:"CP.3",              type:"Prime",      format:"S35",   focals:[15,18,21,25,28,35,50,85,100,135]},
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
  lensCategory:"ARRI/Zeiss",seriesIdx:0,focalIdx:0,focalSelections:{},
  arIdx:3,phoneFOV:65,fovSource:"auto",facingMode:"environment",phoneCameraID:"auto",
  overlays:{frame:true,frameLabel:false,safe:false,grid:false,cross:false,camera:true,lens:true,lensType:false,ar:true,horizon:false},
  overlayColor:'#FF9500'
};
const getCam    =()=>CAMERAS[S.brand][S.camIdx];
const getMode   =()=>getCam().modes[S.modeIdx];
const getSeries =()=>LENSES[S.lensCategory][S.seriesIdx];
const getFocal  =()=>getSeries().focals[S.focalIdx];
const focalSelectionKey =()=>JSON.stringify([S.lensCategory,getSeries().name]);
function enabledFocalIndices(){
  const selected=S.focalSelections[focalSelectionKey()];
  const indices=getSeries().focals.map((_,i)=>i);
  return Array.isArray(selected)?indices.filter(i=>selected.includes(getSeries().focals[i])):indices;
}
function ensureEnabledFocal(){
  const indices=enabledFocalIndices();
  if(!indices.includes(S.focalIdx))S.focalIdx=indices.find(i=>i>=S.focalIdx)??indices[indices.length-1];
}
const getAR     =()=>ASPECT_RATIOS[S.arIdx];
const getHFOV   =()=>OpticalMath.targetHFOV(getMode().w,getMode().h,getFocal(),getAR().value,getSeries().squeeze||1);

// ─── PERSIST SETTINGS ─────────────────────────────────────────────────────────
function saveSettings(){
  try{
    localStorage.setItem(LS_SET,JSON.stringify({
      brand:S.brand,camIdx:S.camIdx,modeIdx:S.modeIdx,
      lensCategory:S.lensCategory,seriesIdx:S.seriesIdx,focalIdx:S.focalIdx,
      focalSelections:S.focalSelections,
      arIdx:S.arIdx,phoneFOV:S.phoneFOV,fovSource:S.fovSource,phoneCameraID:S.phoneCameraID,
      overlays:{...S.overlays},overlayColor:S.overlayColor
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
    if(d.focalSelections&&typeof d.focalSelections==='object'){
      for(const [category,series] of Object.entries(LENSES))for(const lens of series){
        const key=JSON.stringify([category,lens.name]),saved=d.focalSelections[key];
        if(Array.isArray(saved)){
          const valid=lens.focals.filter(f=>saved.includes(f));
          if(valid.length)S.focalSelections[key]=valid;
        }
      }
    }
    ensureEnabledFocal();
    if(typeof d.phoneCameraID==='string')S.phoneCameraID=d.phoneCameraID;
    if(d.arIdx>=0&&d.arIdx<ASPECT_RATIOS.length)S.arIdx=d.arIdx;
    if(d.phoneFOV>=40&&d.phoneFOV<=105){S.phoneFOV=d.phoneFOV;S.fovSource=d.fovSource||'auto';}
    if(d.overlays)S.overlays={...S.overlays,...d.overlays};
    if(d.overlayColor){S.overlayColor=d.overlayColor;OG=d.overlayColor;}
  }catch(e){}
}

// ─── PERSIST SCREENSHOTS ──────────────────────────────────────────────────────
const screenshots=[];

function saveScreenshots(){
  if(window.OpticalNative){persistGallery();return;}
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

async function loadScreenshots(){
  if(window.OpticalNative){
    try{
      const saved=await OpticalNative.loadGallery();
      screenshots.push(...saved.photos);
      videos.push(...saved.videos.map(v=>({...v,blobUrl:URL.createObjectURL(v.blob)})));
      const pending=await OpticalNative.cameraRecover();
      for(const record of pending){
        if(!videos.some(v=>v.nativeID===record.id)){
          const result=await OpticalNative.cameraReadRecording(record),blobUrl=URL.createObjectURL(result.blob);
          videos.push({blob:result.blob,blobUrl,duration:record.duration||0,meta:record.meta||'Registrazione recuperata',filename:record.filename||'opticalpro_recuperato.mp4',mimeType:'video/mp4',optical:record.optical,nativeID:record.id,thumbUrl:await generateVideoThumb(blobUrl)});
          await OpticalNative.saveGallery(screenshots,videos);
        }
        await OpticalNative.cameraRecordRelease(record.id);
      }
      updateGalleryThumb();
    }catch(e){alert('Impossibile leggere la galleria salvata: '+e.message);}
    return;
  }
  try{
    const raw=localStorage.getItem(LS_SHOT);
    if(!raw)return;
    JSON.parse(raw).forEach(s=>screenshots.push(s));
    updateGalleryThumb();
  }catch(e){}
}

function persistGallery(){
  if(!window.OpticalNative)return;
  OpticalNative.saveGallery(screenshots,videos).catch(e=>{
    console.error('Gallery:',e);
    alert('La galleria non è stata salvata. Esporta i file prima di chiudere l’app. '+e.message);
  });
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
  if(nativeCamera)requestNativeConfiguration();
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

// Browser calibration belongs to the delivered camera stream, never a phone-model guess.
const anonymousTracks=new WeakMap();
let webInfo=null,webReference=null,webSelectedID=localStorage.getItem('optical.web.camera')||'';
function webSignature(){
  const track=video.srcObject?.getVideoTracks()[0];
  if(!track||track.readyState!=='live')return null;
  const t=track.getSettings();
  if(!t.deviceId){if(!anonymousTracks.has(track))anonymousTracks.set(track,crypto.randomUUID());t.deviceId='session:'+anonymousTracks.get(track);}
  return OpticalMath.browserCalibrationKey({...t,width:video.videoWidth,height:video.videoHeight});
}
function detectFOV(){ refreshWebOptics(); populateWebCameras().catch(console.error); }
function updateFovStatus(){} // Old guessed presets are no longer offered.
function refreshWebOptics(){
  const key=webSignature();if(!key)return;
  if(webInfo?.key===key)return;
  if(isRecording)stopRecording();
  let hfov=null;try{hfov=JSON.parse(localStorage.getItem('optical.web.calibration.'+key))?.hfov;}catch(e){}
  const calibrated=Number.isFinite(hfov)&&hfov>5&&hfov<170;
  webInfo={key,hfov:calibrated?hfov:null,source:calibrated?'calibrated':'unverified'};
  S.phoneFOV=calibrated?hfov:65;
  $('legacyFovControls').hidden=true;$('nativeOpticsControls').hidden=false;
  document.querySelectorAll('.tab-btn')[4].textContent='CALIBRA';
  $('nativeFovStatus').textContent=calibrated?'Calibrazione misurata':'Da calibrare · anteprima senza simulazione';
  $('nativeCameraDetails').textContent=(video.srcObject.getVideoTracks()[0].label||'Fotocamera')+' · '+video.videoWidth+' × '+video.videoHeight+(calibrated?' · '+hfov.toFixed(2)+'°':'');
  $('calibrationEditor').hidden=true;
  $('webCalibrationNotice').hidden=calibrated;
}
async function populateWebCameras(){
  const select=$('phoneCameraSel');select.innerHTML='';
  const devices=(await navigator.mediaDevices.enumerateDevices()).filter(d=>d.kind==='videoinput');
  for(const [i,d] of devices.entries()){
    if(!d.deviceId)continue;
    const option=document.createElement('option');option.value=d.deviceId;option.textContent=d.label||('Fotocamera '+(i+1));select.appendChild(option);
  }
  select.value=video.srcObject.getVideoTracks()[0].getSettings().deviceId||'';
}
function requireWebCalibration(){
  refreshWebOptics();
  if(webInfo?.source==='calibrated')return true;
  openSettings();switchTab('fov',document.querySelectorAll('.tab-btn')[4]);return false;
}
function drawWebSource(context,frame,simulate=true){
  const sw=Math.max(video.videoWidth,video.videoHeight),sh=Math.min(video.videoWidth,video.videoHeight);
  const box=simulate?OpticalMath.project(sw,sh,S.phoneFOV,getHFOV(),frame):(()=>{
    const scale=Math.min(frame.width/sw,frame.height/sh),width=sw*scale,height=sh*scale;
    return {x:frame.x+(frame.width-width)/2,y:frame.y+(frame.height-height)/2,width,height};
  })();
  context.save();context.beginPath();context.rect(frame.x,frame.y,frame.width,frame.height);context.clip();
  context.fillStyle='#132029';context.fillRect(frame.x,frame.y,frame.width,frame.height);
  if(video.videoHeight>video.videoWidth){context.translate(box.x+box.width/2,box.y+box.height/2);context.rotate(-Math.PI/2);context.drawImage(video,-box.height/2,-box.width/2,box.height,box.width);}
  else context.drawImage(video,box.x,box.y,box.width,box.height);
  context.restore();
}
setInterval(()=>{
  if(nativeCamera||!cameraReady||video.readyState<2)return;
  refreshWebOptics();
  if(webInfo?.source==='calibrated'){
    const r=getFrameRect(),box=OpticalMath.project(Math.max(video.videoWidth,video.videoHeight),Math.min(video.videoWidth,video.videoHeight),S.phoneFOV,getHFOV(),{x:0,y:0,width:r.fW,height:r.fH});
    $('nativeCoverage').textContent=box.covered?'Il frame è coperto dalla fotocamera.':'La parte esterna alla copertura resta vuota: la fotocamera non può riprenderla.';
  }
},500);

// Native capture owns the physical camera, preview and media geometry.
let nativeCamera=false,nativeCameraInfo=null,nativeConfiguration=Promise.resolve();
let nativeConfigKey='',nativeConfigTimer=null,nativeStopping=null,calibrationKey=null,nativeGeneration=0,photoInProgress=false,nativeSuspended=false;
function nativeOptions(){
  const r=getFrameRect();
  return {hfov:getHFOV(),aspect:getAR().value,cameraID:S.phoneCameraID,x:r.fX,y:r.fY,width:r.fW,height:r.fH,orientation:(window.orientation??screen.orientation?.angle??0)+'|'+innerWidth+'x'+innerHeight};
}
function requestNativeConfiguration(){
  if(!nativeCamera||isRecording||recordingStarting||nativeSuspended||document.visibilityState!=='visible')return;
  clearTimeout(nativeConfigTimer);
  nativeConfigTimer=setTimeout(()=>configureNativeCamera().catch(e=>{cameraReady=false;cameraMessage(e.message);}),100);
}
function configureNativeCamera(force=false){
  if(!nativeCamera)return Promise.resolve();
  clearTimeout(nativeConfigTimer);
  const options=nativeOptions(),key=JSON.stringify(options);
  if(!force&&key===nativeConfigKey)return nativeConfiguration;
  nativeConfigKey=key;cameraReady=false;const generation=++nativeGeneration;
  nativeConfiguration=nativeConfiguration.catch(()=>{}).then(()=>OpticalNative.cameraConfigure(options)).then(async info=>{
    await OpticalNative.cameraWaitReady();
    if(generation===nativeGeneration){
      nativeCameraInfo=info;S.phoneFOV=info.hfov;
      if(info.requestedCameraUnavailable){S.phoneCameraID='auto';saveSettings();}
      cameraReady=true;cameraMessage('');updateNativeOpticsStatus();
    }return info;
  }).catch(error=>{if(generation===nativeGeneration)nativeConfigKey='';throw error;});
  return nativeConfiguration;
}
function updateNativeOpticsStatus(){
  if(!nativeCameraInfo)return;
  const info=nativeCameraInfo,select=$('phoneCameraSel');
  select.innerHTML='';
  for(const option of [{id:'auto',name:'Automatica (principale / ultra-wide)'},...info.cameras]){
    const element=document.createElement('option');element.value=option.id;element.textContent=option.name;select.appendChild(element);
  }
  select.value=S.phoneCameraID;
  $('nativeFovStatus').textContent=info.source==='calibrated'?'Calibrazione misurata':'Dati del formato iOS';
  $('nativeCameraDetails').textContent=info.name+' · '+info.width+' × '+info.height+' · '+info.hfov.toFixed(2)+'° orizzontali';
  $('nativeCoverage').textContent=(info.requestedCameraUnavailable?'La fotocamera precedente non è disponibile. Selezionata Automatica. ':'')+(info.covered?'Il frame è coperto dalla fotocamera.':'La parte esterna alla copertura resta vuota: la fotocamera non può riprenderla.');
}
function onPhoneCameraChange(){if(!nativeCamera){webSelectedID=$('phoneCameraSel').value;localStorage.setItem('optical.web.camera',webSelectedID);webInfo=null;startCamera();return;}S.phoneCameraID=$('phoneCameraSel').value;saveSettings();requestNativeConfiguration();}
async function beginCalibration(){
  try{
    if(!nativeCamera){
      if(!cameraReady||video.readyState<2)throw new Error('Attendi la fotocamera.');
      const image=document.createElement('canvas');image.width=Math.max(video.videoWidth,video.videoHeight);image.height=Math.min(video.videoWidth,video.videoHeight);
      drawWebSource(image.getContext('2d'),{x:0,y:0,width:image.width,height:image.height},false);
      webReference=webSignature();$('calibrationImage').src=image.toDataURL('image/jpeg',.95);
      $('calibrationEditor').hidden=false;updateCalibrationGuides();return;
    }
    await configureNativeCamera();calibrationKey=nativeCameraInfo.calibrationKey;
    $('calibrationImage').src=await OpticalNative.cameraSnapshot(true);
    $('calibrationEditor').hidden=false;$('calibrationResult').textContent='';updateCalibrationGuides();
  }catch(e){alert(e.message);}
}
function updateCalibrationGuides(){
  const fraction=+$('calibrationSpan').value/100;
  $('calibrationLeft').style.left=((1-fraction)*50)+'%';$('calibrationRight').style.left=((1+fraction)*50)+'%';
  try{$('calibrationResult').textContent='Campo visivo misurato: '+OpticalMath.calibrationHFOV(+$('calibrationWidth').value,+$('calibrationDistance').value,fraction).toFixed(2)+'°';}
  catch(e){$('calibrationResult').textContent=e.message;}
}
async function saveCalibration(){
  try{
    if(!nativeCamera){
      if(!webReference||webReference!==webSignature())throw new Error('Fotocamera o formato cambiati. Acquisisci una nuova immagine.');
      const hfov=OpticalMath.calibrationHFOV(+$('calibrationWidth').value,+$('calibrationDistance').value,+$('calibrationSpan').value/100);
      localStorage.setItem('optical.web.calibration.'+webReference,JSON.stringify({hfov,measuredAt:new Date().toISOString()}));
      webInfo=null;refreshWebOptics();return;
    }
    if(!nativeCameraInfo||calibrationKey!==nativeCameraInfo.calibrationKey)throw new Error('La fotocamera è cambiata. Acquisisci una nuova immagine di riferimento.');
    const hfov=OpticalMath.calibrationHFOV(+$('calibrationWidth').value,+$('calibrationDistance').value,+$('calibrationSpan').value/100);
    await OpticalNative.cameraCalibrate(hfov);await configureNativeCamera(true);$('calibrationEditor').hidden=true;
  }catch(e){alert(e.message);}
}
async function resetNativeCalibration(){
  if(!nativeCamera){try{const key=webSignature();if(key)localStorage.removeItem('optical.web.calibration.'+key);webInfo=null;refreshWebOptics();}catch(e){alert(e.message);}return;}
  try{await OpticalNative.cameraCalibrate(null);await configureNativeCamera(true);$('calibrationEditor').hidden=true;}catch(e){alert(e.message);}
}
function lockCaptureControls(locked){
  for(const el of document.querySelectorAll('#settModal button,#settModal select,#settModal input,#cameraMenuButton,#btnNext,#btnPrev,#shotBtn,#gallContainer')){
    if(el.id==='gallContainer')el.style.pointerEvents=locked?'none':'';else el.disabled=locked;
  }
  if(!locked)updateSidebar();
}
async function startNativeRecording(){
  recordingStarting=true;lockCaptureControls(true);
  try{
    await configureNativeCamera();
    const {fX,fY,fW,fH}=getFrameRect(),width=1280,height=Math.round(width/getAR().value/2)*2;
    const footer=Math.round(REC_META_H*width/fW/2)*2;
    const overlay=document.createElement('canvas');overlay.width=width;overlay.height=height+footer;
    const oc=overlay.getContext('2d');oc.drawImage(canvas,fX*DPR,fY*DPR,fW*DPR,fH*DPR,0,0,width,height);
    drawExportMetadata(oc,fW,fH,REC_META_H,new Date().toLocaleString('it-IT'),width/fW);
    await OpticalNative.cameraRecordStart({overlay:overlay.toDataURL('image/png').split(',')[1],footer,metadata:{meta:`${S.brand} ${getCam().model} | ${getSeries().name} ${getFocal()}mm | ${getAR().label}`,filename:'opticalpro_'+Date.now()+'.mp4',optical:{...nativeCameraInfo,targetHFOV:getHFOV()}}});
    nativeSuspended=false;cameraReady=true;
    isRecording=true;recSecs=0;recTimer=setInterval(()=>{recSecs++;updateRecBtn();},1000);updateRecBtn();
  }catch(e){lockCaptureControls(false);alert('Registrazione non avviata: '+e.message);}
  finally{recordingStarting=false;}
}
async function stopNativeRecording(){
  if(nativeStopping)return nativeStopping;
  nativeStopping=(async()=>{
    try{
      clearInterval(recTimer);$('recBtn').disabled=true;
      const result=await OpticalNative.cameraRecordStop(),blob=result.blob,blobUrl=URL.createObjectURL(blob);
      const entry={blob,blobUrl,duration:result.duration||0,mimeType:'video/mp4',meta:result.meta,filename:result.filename,optical:result.optical,nativeID:result.id};
      entry.thumbUrl=await generateVideoThumb(blobUrl);videos.push(entry);await OpticalNative.saveGallery(screenshots,videos);
      await OpticalNative.cameraRecordRelease(result.id);updateGalleryThumb();
    }catch(e){alert('Registrazione non salvata: '+e.message);}
    finally{isRecording=false;clearInterval(recTimer);recSecs=0;nativeStopping=null;$('recBtn').disabled=false;lockCaptureControls(false);updateRecBtn();requestNativeConfiguration();}
  })();
  return nativeStopping;
}

// ─── CAMERA ───────────────────────────────────────────────────────────────────
let cameraStartPromise=null,cameraReady=false;
function cameraMessage(message){
  let panel=$('cameraMessage');
  if(!panel){
    panel=document.createElement('div');panel.id='cameraMessage';
    const text=document.createElement('p');panel.appendChild(text);
    const retry=document.createElement('button');retry.textContent='Riprova';retry.onclick=()=>startCamera();panel.appendChild(retry);
    if(window.OpticalNative){
      const settings=document.createElement('button');settings.textContent='Impostazioni iPhone';
      settings.onclick=()=>OpticalNative.openSettings();panel.appendChild(settings);
    }
    app.appendChild(panel);
  }
  panel.querySelector('p').textContent=message;panel.hidden=!message;
}
function startCamera(){
  if(cameraStartPromise)return cameraStartPromise;
  cameraStartPromise=(async()=>{
    try{
      cameraReady=false;
      if(window.OpticalNative&&await OpticalNative.cameraAvailable()){
        nativeCamera=true;nativeSuspended=false;document.documentElement.classList.add('native-camera');
        $('legacyFovControls').hidden=true;$('nativeOpticsControls').hidden=false;document.querySelectorAll('.tab-btn')[4].textContent='CALIBRA';
        await configureNativeCamera(true);return;
      }
      if(video.srcObject)video.srcObject.getTracks().forEach(t=>t.stop());
      if(!navigator.mediaDevices?.getUserMedia)throw new Error('Fotocamera non disponibile.');
      const stream=await navigator.mediaDevices.getUserMedia({
        audio:false,
        video:{...(webSelectedID?{deviceId:{exact:webSelectedID}}:{facingMode:{ideal:'environment'}}),width:{ideal:1920},height:{ideal:1080},frameRate:{ideal:30},resizeMode:{ideal:'none'}}
      });
      video.srcObject=stream;await video.play();webInfo=null;detectFOV(stream);cameraReady=true;cameraMessage('');
    }catch(e){
      if(!nativeCamera&&e.name==='OverconstrainedError'&&webSelectedID){webSelectedID='';localStorage.removeItem('optical.web.camera');cameraMessage('La fotocamera salvata non è disponibile. Premi Riprova per selezionarne una disponibile.');return;}
      console.error('Camera:',e);
      cameraMessage(nativeCamera?e.message:(e.name==='NotAllowedError'
        ?'Consenti l’accesso alla fotocamera nelle Impostazioni e premi Riprova.'
        :'Fotocamera non disponibile. Controlla i permessi e riprova.'));
    }finally{cameraStartPromise=null;}
  })();
  return cameraStartPromise;
}

// ─── BLACK SCREEN RECOVERY ────────────────────────────────────────────────────
function checkAndRestartCamera(){
  if(document.visibilityState!=='visible'||cameraStartPromise||recordingStarting)return;
  if(nativeCamera)nativeSuspended=false;
  if(nativeCamera&&isRecording){stopNativeRecording();return;}
  if(isRecording)return;
  if(nativeCamera){configureNativeCamera(true).catch(e=>cameraMessage(e.message));return;}
  if(!video.srcObject||!video.srcObject.active||video.paused||video.readyState<2){
    startCamera();
  }
}
document.addEventListener('visibilitychange',()=>{
  if(document.visibilityState==='visible')checkAndRestartCamera();
});
window.opticalInterfaceChanged=()=>{
  applyLandscape();
  if(nativeCamera&&!isRecording&&!recordingStarting)configureNativeCamera(true).catch(e=>{cameraReady=false;cameraMessage(e.message);});
};
window.opticalDidBecomeActive=()=>{
  nativeSuspended=false;
  if(cameraStartPromise)cameraStartPromise.finally(()=>checkAndRestartCamera());
  else checkAndRestartCamera();
};
window.addEventListener('pageshow',()=>checkAndRestartCamera());
window.addEventListener('focus',()=>setTimeout(checkAndRestartCamera,400));

// ─── RECORDING ────────────────────────────────────────────────────────────────
let mediaRecorder=null,recordedChunks=[],isRecording=false,recSecs=0,recTimer=null;
let recCanvas=null,recCtx=null,recRAF=null,recFX=0,recFY=0,recFW=0,recFH=0,recDPR2=1;
const REC_META_H=36;
const videos=[];
let recordingStarting=false;

window.opticalPause=()=>{
  if(nativeCamera){cameraReady=false;nativeSuspended=true;nativeConfigKey='';nativeGeneration++;}
  if(isRecording){const stopped=stopRecording();if(nativeCamera)Promise.resolve(stopped).finally(()=>OpticalNative.cameraPause());}
  else if(nativeCamera)OpticalNative.cameraPause();
};

function toggleRecording(){
  if(recordingStarting||photoInProgress)return;
  if(!cameraReady){cameraMessage('Attiva la fotocamera prima di registrare.');return;}
  if(!nativeCamera&&!isRecording&&!requireWebCalibration())return;
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
    drawWebSource(recCtx,{x:0,y:0,width:rW,height:rH});
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
  drawExportMetadata(recCtx,rW,rH,REC_META_H,dateStr,recDPR2);

  // REC dot
  const pulse=Math.floor(Date.now()/500)%2===0;
  recCtx.beginPath();recCtx.arc(rW-8,8,4,0,Math.PI*2);
  recCtx.fillStyle=pulse?'#FF3B30':'rgba(255,59,48,.3)';recCtx.fill();

  recRAF=requestAnimationFrame(recDrawLoop);
}

async function startRecording(){
  if(nativeCamera)return startNativeRecording();
  recordingStarting=true;lockCaptureControls(true);
  try{
    if(typeof MediaRecorder==='undefined')throw new Error('Registrazione non supportata su questo dispositivo.');
    if(!video.srcObject.getAudioTracks().length){
      try{
        const audio=await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:false,noiseSuppression:false}});
        audio.getAudioTracks().forEach(t=>video.srcObject.addTrack(t));
      }catch(e){console.info('Microfono non disponibile: registrazione senza audio.');}
    }
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
    if(!stream)throw new Error('Questo browser non supporta la registrazione del mirino.');
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
        duration:dur,mimeType:finalMime,optical:{...webInfo,targetHFOV:getHFOV()}
      };
      generateVideoThumb(blobUrl).then(thumb=>{entry.thumbUrl=thumb;renderGalleryGrid();updateGalleryThumb();});
      videos.push(entry);
      persistGallery();
      updateGalleryThumb();
      isRecording=false;lockCaptureControls(false);clearInterval(recTimer);recSecs=0;updateRecBtn();
      video.srcObject?.getAudioTracks().forEach(t=>{t.stop();video.srcObject.removeTrack(t);});
    };
    mediaRecorder.onerror=e=>{console.error('MediaRecorder:',e);stopRecording();};
    mediaRecorder.start(500);
    recTimer=setInterval(()=>{recSecs++;updateRecBtn();},1000);
    updateRecBtn();
  }catch(e){
    console.error('startRecording:',e);
    isRecording=false;lockCaptureControls(false);cancelAnimationFrame(recRAF);
    alert('Errore: '+e.message);
  }finally{recordingStarting=false;}
}

function stopRecording(){
  if(nativeCamera)return stopNativeRecording();
  if(mediaRecorder&&mediaRecorder.state!=='inactive')mediaRecorder.stop();
  clearInterval(recTimer);
}
function updateRecBtn(){$('recBtn').classList.toggle('recording',isRecording);}

function generateVideoThumb(blobUrl){
  return new Promise(resolve=>{
    const v=document.createElement('video');
    v.preload='auto';v.src=blobUrl;v.muted=true;v.playsInline=true;
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
let OG='#FF9500';

function getFrameRect(){
  const logW=canvas.width/DPR,logH=canvas.height/DPR,ar=getAR();
  // Reserve actual space outside every aspect ratio for the viewfinder labels.
  const top=S.overlays.frameLabel?58:42,bottom=S.overlays.lensType?42:30,inset=8;
  const availW=logW-SIDE_W-inset*2,availH=Math.max(32,logH-top-bottom);
  let fW=availW,fH=fW/ar.value;
  if(fH>availH){fH=availH;fW=fH*ar.value;}
  return{fX:inset+(availW-fW)/2,fY:top+(availH-fH)/2,fW,fH,logW,logH};
}

function draw(){
  const{fX,fY,fW,fH,logW,logH}=getFrameRect();
  const ar=getAR(),cinemaFOV=getHFOV();
  ctx.setTransform(DPR,0,0,DPR,0,0);
  ctx.clearRect(0,0,logW,logH);

  const vZoom=Math.tan(S.phoneFOV*Math.PI/360)/Math.tan(cinemaFOV*Math.PI/360);

  // BG
  ctx.fillStyle='#050505';ctx.fillRect(0,0,logW,logH);

  // The native preview and exports use the same centred, format-based projection.
  if(nativeCamera){
    ctx.clearRect(fX,fY,fW,fH);
  }else if(video.readyState>=2){
    drawWebSource(ctx,{x:fX,y:fY,width:fW,height:fH},webInfo?.source==='calibrated');
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
    const tw=ctx.measureText(lbl).width,lx=fX+(fW-tw)/2,ly=fY-42;
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

  // Information lives in the reserved bands above and below the captured frame.
  if(!noTextOverlay){
    const cam=getCam(),m=getMode(),f=getFocal();
    const fs=Math.max(9,Math.min(11,fW/52));
    ctx.font=`bold ${fs}px 'Courier New',monospace`;ctx.fillStyle=OG;
    function label(text,x,y,maxWidth,align='left'){
      let fitted=text;
      while(fitted.length&&ctx.measureText(fitted).width>maxWidth)fitted=fitted.slice(0,-1);
      if(fitted!==text)fitted=fitted.slice(0,-1)+'…';
      ctx.textAlign=align;ctx.fillText(fitted,x,y);ctx.textAlign='left';
    }
    const leftW=fW*.65,rightW=fW*.32;
    if(S.overlays.camera){
      label(`${S.brand} ${cam.model}`,fX,fY-26,leftW);
      label(m.name,fX,fY-10,leftW);
    }
    if(S.overlays.lens||S.overlays.lensType){
      const rt=`${f}mm  ${cinemaFOV.toFixed(1)}°`;
      label(rt,fX+fW,fY-26,rightW,'right');
    }
    if(S.overlays.lens){
      label(getSeries().name,fX,fY+fH+18,leftW);
    }
    if(S.overlays.lensType){
      label(getSeries().type,fX,fY+fH+(S.overlays.lens?32:18),leftW);
    }
    if(S.overlays.ar){
      label(getAR().label,fX+fW,fY+fH+18,rightW,'right');
    }
  }

  // REC indicator
  if(isRecording){
    const mins=String(Math.floor(recSecs/60)).padStart(2,'0');
    const secs=String(recSecs%60).padStart(2,'0');
    const pulse=Math.floor(Date.now()/500)%2===0;
    ctx.font=`bold 11px 'Courier New',monospace`;
    const recW=ctx.measureText('00:00').width+14;
    const rx=fX+(fW-recW)/2,ry=fY+fH+5;
    ctx.fillStyle='rgba(0,0,0,.6)';ctx.fillRect(rx-2,ry,recW+4,16);
    ctx.beginPath();ctx.arc(rx+8,ry+8,4,0,Math.PI*2);
    ctx.fillStyle=pulse?'#FF3B30':'rgba(255,59,48,.3)';ctx.fill();
    ctx.fillStyle='#FF3B30';ctx.fillText(`${mins}:${secs}`,rx+16,ry+11);
  }

  requestAnimationFrame(draw);
}

// ─── SCREENSHOT ───────────────────────────────────────────────────────────────
function captureScreenshot(){
  if(isRecording||recordingStarting||photoInProgress)return;
  if(!cameraReady){cameraMessage('Attiva la fotocamera prima di scattare.');return;}
  if(!nativeCamera&&!requireWebCalibration())return;
  if(screenshots.length>=MAX_SHOTS){showMemoryFull();return;}
  noTextOverlay=true;photoInProgress=true;if(nativeCamera)lockCaptureControls(true);
  requestAnimationFrame(()=>requestAnimationFrame(()=>{Promise.resolve(doCapture()).catch(e=>alert('Foto non acquisita: '+e.message)).finally(()=>{noTextOverlay=false;photoInProgress=false;if(nativeCamera)lockCaptureControls(false);});}));
}

// Keep exported information in a separate two-row footer, with bounded columns.
function drawExportMetadata(context,width,frameHeight,barHeight,dateText,scale=1){
  context.save();context.setTransform(scale,0,0,scale,0,0);
  context.fillStyle='#080808';context.fillRect(0,frameHeight,width,barHeight);
  const fs=Math.max(8,Math.min(10,width/50)),pad=8,column=(width-pad*3)/2;
  context.font=`bold ${fs}px 'Courier New',monospace`;context.fillStyle=OG;context.textBaseline='middle';
  function text(value,x,y,align){
    let fitted=value;
    while(fitted.length&&context.measureText(fitted).width>column)fitted=fitted.slice(0,-1);
    if(fitted!==value)fitted=fitted.slice(0,-1)+'…';
    context.textAlign=align;context.fillText(fitted,x,y);
  }
  text(`${S.brand} ${getCam().model}`,pad,frameHeight+11,'left');
  text(`${getSeries().name} ${getFocal()}mm ${getHFOV().toFixed(1)}°`,width-pad,frameHeight+11,'right');
  text(getMode().name,pad,frameHeight+26,'left');
  text(`${getAR().label}  ${dateText}`,width-pad,frameHeight+26,'right');
  context.restore();
}

async function doCapture(){
  const{fX,fY,fW,fH}=getFrameRect();
  const metaH=36,pFX=fX*DPR,pFY=fY*DPR,pFW=fW*DPR,pFH=fH*DPR,pMH=metaH*DPR;
  const tmp=document.createElement('canvas');
  tmp.width=Math.round(pFW);tmp.height=Math.round(pFH+pMH);
  const tc=tmp.getContext('2d');
  if(nativeCamera){
    await configureNativeCamera();const image=new Image();image.src=await OpticalNative.cameraSnapshot(false);await image.decode();
    tc.drawImage(image,0,0,Math.round(pFW),Math.round(pFH));
  }
  tc.drawImage(canvas,Math.round(pFX),Math.round(pFY),Math.round(pFW),Math.round(pFH),0,0,Math.round(pFW),Math.round(pFH));
  const cam=getCam(),m=getMode(),s=getSeries(),f=getFocal(),ar=getAR();
  const now=new Date();
  const dateStr=`${String(now.getDate()).padStart(2,'0')}/${String(now.getMonth()+1).padStart(2,'0')}/${String(now.getFullYear()).slice(-2)}  ${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')}`;
  drawExportMetadata(tc,fW,fH,metaH,dateStr,DPR);
  const dataUrl=tmp.toDataURL('image/jpeg',.88);
  const ts=`${now.getFullYear()}${String(now.getMonth()+1).padStart(2,'0')}${String(now.getDate()).padStart(2,'0')}_${String(now.getHours()).padStart(2,'0')}${String(now.getMinutes()).padStart(2,'0')}${String(now.getSeconds()).padStart(2,'0')}`;
  const shot={dataUrl,meta:`${S.brand} ${cam.model} | ${s.name} ${f}mm | ${ar.label}`,filename:`opticalpro_${S.brand}_${f}mm_${ar.label.replace(':','x')}_${ts}.jpg`};
  if(!nativeCamera)shot.optical={...webInfo,targetHFOV:getHFOV()};
  if(nativeCamera)shot.optical={...nativeCameraInfo,targetHFOV:getHFOV()};
  screenshots.push(shot);
  if(nativeCamera)await OpticalNative.saveGallery(screenshots,videos);else saveScreenshots();
  updateGalleryThumb();
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
  if(window.OpticalNative){
    try{await OpticalNative.share(await (await fetch(dataUrl)).blob(),filename);}
    catch(e){alert('Esportazione non riuscita: '+e.message);}
    return;
  }
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
      <div class="gitem" role="button" aria-label="Apri foto ${i+1}" onclick="openViewer('foto',${i})">
        <img src="${s.dataUrl}" loading="lazy">
        <div class="gitem-meta">${s.meta}</div>
        <button class="gitem-del" onclick="event.stopPropagation();deleteShot(${i})">&#x2715;</button>
      </div>`).join('');
  } else {
    grid.innerHTML=items.map((v,i)=>`
      <div class="gitem" role="button" aria-label="Apri video ${i+1}" onclick="openViewer('video',${i})">
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
  persistGallery();
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
    if(window.OpticalNative){
      try{await OpticalNative.share(v.blob,v.filename);}
      catch(e){alert('Esportazione non riuscita: '+e.message);}
      return;
    }
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
function openSettings(){if(isRecording||recordingStarting)return;$('settBack').classList.add('open');$('settModal').classList.add('open');}
function closeSettings(){$('settBack').classList.remove('open');$('settModal').classList.remove('open');}

// ─── UI BUILDERS ─────────────────────────────────────────────────────────────
const $=id=>document.getElementById(id);
function buildBrandChips(){$('brandChips').innerHTML=Object.keys(CAMERAS).map(b=>`<button class="chip${b===S.brand?' active':''}" onclick="setBrand('${b}')">${b}</button>`).join('');}
function buildCamSel(){$('camSel').innerHTML=CAMERAS[S.brand].map((c,i)=>`<option value="${i}"${i===S.camIdx?' selected':''}>${c.model} (${c.year})</option>`).join('');}
function buildModeSel(){$('modeSel').innerHTML=getCam().modes.map((m,i)=>`<option value="${i}"${i===S.modeIdx?' selected':''}>${m.name}  ${m.res}</option>`).join('');}
function buildSensorMeta(){const m=getMode();$('sensorMeta').innerHTML=`Sensore <span>${m.w} × ${m.h} mm</span>`;}
function buildLensBrandChips(){$('lensBrandChips').innerHTML=Object.keys(LENSES).map(c=>`<button class="chip${c===S.lensCategory?' active':''}" onclick="setLensCat('${c}')">${c}</button>`).join('');}
function buildSeriesSel(){$('seriesSel').innerHTML=LENSES[S.lensCategory].map((s,i)=>`<option value="${i}"${i===S.seriesIdx?' selected':''}>[${s.type}] ${s.name}  (${s.format})</option>`).join('');}
function buildFocalChips(){
  const enabled=enabledFocalIndices();
  $('focalChips').innerHTML=getSeries().focals.map((f,i)=>`<button class="chip focal-chip${enabled.includes(i)?' active':''}" aria-pressed="${enabled.includes(i)}" aria-label="${f} mm" onclick="toggleFocal(${i})"><span class="focal-check" aria-hidden="true">${enabled.includes(i)?'✓':'−'}</span>${f}<span class="focal-unit">mm</span></button>`).join('');
  $('focalSelectionStatus').textContent=`${enabled.length} di ${getSeries().focals.length} attive`;
}
function buildARChips(){$('arChips').innerHTML=ASPECT_RATIOS.map((a,i)=>`<button class="chip${i===S.arIdx?' active':''}" onclick="setAR(${i})">${a.label}</button>`).join('');}
function buildLensMeta(){const m=getMode();$('lensMeta').innerHTML=`HFOV <span>${getHFOV().toFixed(1)}°</span>  &nbsp; Sensore <span>${m.w}×${m.h}mm</span>`;}
const OVERLAY_COLORS=[
  {l:'Bianco',  c:'#FFFFFF'},
  {l:'Verde',   c:'#30D158'},
  {l:'Blu',     c:'#0A84FF'},
  {l:'Rosso',   c:'#FF3B30'},
  {l:'Giallo',  c:'#FFD60A'},
  {l:'Arancione',c:'#FF9500'},
  {l:'Viola',   c:'#BF5AF2'},
  {l:'Rosa',    c:'#FF375F'},
];
function buildColorChips(){
  $('colorChips').innerHTML=OVERLAY_COLORS.map(({l,c})=>
    `<button class="color-chip${S.overlayColor===c?' active':''}" style="background:${c}" title="${l}" onclick="setOverlayColor('${c}')"></button>`
  ).join('');
}
function setOverlayColor(c){S.overlayColor=c;OG=c;buildColorChips();saveSettings();}

function buildOverlayChips(){
  const defs=[{k:'frame',l:'Frame'},{k:'camera',l:'Camera'},{k:'lens',l:'Lens'},{k:'ar',l:'A. Ratio'},{k:'safe',l:'Safe Area'},{k:'grid',l:'Grid 3×3'},{k:'cross',l:'Cross'},];
  $('overlayChips').innerHTML=defs.map(d=>`<button class="ov-chip${S.overlays[d.k]?' active':''}" onclick="toggleOv('${d.k}')">${d.l}</button>`).join('');
}
function buildFovPresets(){}
function updateSidebar(){
  const cam=getCam(),m=getMode(),s=getSeries(),f=getFocal();
  $('sCamName').textContent=cam.model;
  $('sModeName').textContent=m.name;
  $('sSeriesName').textContent=s.name;
  $('sNavFocalNum').textContent=f;
  $('sNavFocalNum').dataset.digits=String(f).length;
  const enabled=enabledFocalIndices();
  $('btnPrev').disabled=!enabled.some(i=>i<S.focalIdx);
  $('btnNext').disabled=!enabled.some(i=>i>S.focalIdx);
  if(nativeCamera)requestNativeConfiguration();
}
function buildAll(){
  buildBrandChips();buildCamSel();buildModeSel();buildSensorMeta();
  buildLensBrandChips();buildSeriesSel();buildFocalChips();buildARChips();buildLensMeta();
  buildOverlayChips();buildColorChips();buildFovPresets();updateFovStatus();updateSidebar();
  const sl=$('fovSlider');if(sl)sl.value=S.phoneFOV;
  const fv=$('fovVal');if(fv)fv.textContent=S.phoneFOV+'°';
}

// ─── HANDLERS ─────────────────────────────────────────────────────────────────
function switchTab(n,btn){document.querySelectorAll('.tab-pane').forEach(p=>p.classList.remove('active'));document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));$(('pane-'+n)).classList.add('active');btn.classList.add('active');}
function setBrand(b){S.brand=b;S.camIdx=0;S.modeIdx=0;buildBrandChips();buildCamSel();buildModeSel();buildSensorMeta();buildLensMeta();updateSidebar();saveSettings();}
function onCamChange(){S.camIdx=+$('camSel').value;S.modeIdx=0;buildModeSel();buildSensorMeta();buildLensMeta();updateSidebar();saveSettings();}
function onModeChange(){S.modeIdx=+$('modeSel').value;buildSensorMeta();buildLensMeta();updateSidebar();saveSettings();}
function setLensCat(c){S.lensCategory=c;S.seriesIdx=0;S.focalIdx=0;ensureEnabledFocal();buildLensBrandChips();buildSeriesSel();buildFocalChips();buildLensMeta();updateSidebar();saveSettings();}
function onSeriesChange(){S.seriesIdx=+$('seriesSel').value;S.focalIdx=0;ensureEnabledFocal();buildFocalChips();buildLensMeta();updateSidebar();saveSettings();}
function setFocalIdx(i){S.focalIdx=i;buildFocalChips();buildLensMeta();updateSidebar();saveSettings();}
function toggleFocal(i){
  const enabled=enabledFocalIndices();
  if(enabled.includes(i)&&enabled.length===1){
    $('focalSelectionStatus').textContent='Mantieni almeno una focale attiva.';
    return;
  }
  S.focalSelections[focalSelectionKey()]=getSeries().focals.filter((_,index)=>index===i?!enabled.includes(i):enabled.includes(index));
  ensureEnabledFocal();buildFocalChips();buildLensMeta();updateSidebar();saveSettings();
}
function selectAllFocals(){
  delete S.focalSelections[focalSelectionKey()];
  buildFocalChips();updateSidebar();saveSettings();
}
function prevFocalEv(e){
  e.stopPropagation();
  const previous=enabledFocalIndices().filter(i=>i<S.focalIdx).pop();
  if(previous!==undefined)setFocalIdx(previous);
}
function nextFocalEv(e){
  e.stopPropagation();
  const next=enabledFocalIndices().find(i=>i>S.focalIdx);
  if(next!==undefined)setFocalIdx(next);
}
function setAR(i){S.arIdx=i;buildARChips();updateSidebar();saveSettings();}
function toggleOv(k){S.overlays[k]=!S.overlays[k];buildOverlayChips();saveSettings();}
function onFovChange(){S.phoneFOV=+$('fovSlider').value;S.fovSource='manual';$('fovVal').textContent=S.phoneFOV+'°';buildFovPresets();updateFovStatus();saveSettings();}
function setFovPreset(v){S.phoneFOV=v;S.fovSource='manual';$('fovSlider').value=v;$('fovVal').textContent=v+'°';buildFovPresets();updateFovStatus();saveSettings();}
function resetFovAuto(){S.fovSource='auto';if(video.srcObject)detectFOV(video.srcObject);}

// ─── LAUNCH ───────────────────────────────────────────────────────────────────
(async function(){
  loadSettings(); // restore before UI build
  const splash=document.getElementById('splash');
  app.style.display='block';
  applyLandscape();
  buildAll();
  await loadScreenshots();
  startCamera();
  draw();
  // The logo follows the system orientation. It never rotates on a timer.
  let splashFinished=false;
  const earliest=performance.now()+1800;
  function finishSplash(){
    if(splashFinished)return;
    const remaining=earliest-performance.now();
    if(remaining>0){setTimeout(finishSplash,Math.ceil(remaining));return;}
    if(window.innerHeight>window.innerWidth)return;
    splashFinished=true;
    window.removeEventListener('resize',finishSplash);
    splash.classList.add('fade');
    if(window.OpticalNative)OpticalNative.finishLaunch().catch(console.error);
    setTimeout(()=>splash.style.display='none',700);
  }
  window.addEventListener('resize',finishSplash);
  setTimeout(finishSplash,1800);
})();
