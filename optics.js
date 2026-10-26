/* Rectilinear, centred framing. All dimensions are of the delivered source image. */
(function(root){
  const radians=degrees=>degrees*Math.PI/180;
  const degrees=radians=>radians*180/Math.PI;
  function targetHFOV(sensorWidth,sensorHeight,focal,aspect,squeeze=1){
    if(![sensorWidth,sensorHeight,focal,aspect,squeeze].every(v=>Number.isFinite(v)&&v>0))throw new Error('Dati ottici non validi.');
    const width=Math.min(sensorWidth*squeeze,sensorHeight*aspect);
    return degrees(2*Math.atan(width/(2*focal)));
  }
  function project(sourceWidth,sourceHeight,sourceHFOV,targetHFOV,frame){
    if(![sourceWidth,sourceHeight,frame.width,frame.height].every(v=>Number.isFinite(v)&&v>0)||![sourceHFOV,targetHFOV].every(Number.isFinite)||sourceHFOV<=0||sourceHFOV>=180||targetHFOV<=0||targetHFOV>=180)throw new Error('Proiezione non valida.');
    const width=frame.width*Math.tan(radians(sourceHFOV)/2)/Math.tan(radians(targetHFOV)/2);
    const height=width*sourceHeight/sourceWidth;
    return{x:frame.x+(frame.width-width)/2,y:frame.y+(frame.height-height)/2,width,height,covered:width>=frame.width-.01&&height>=frame.height-.01};
  }
  function calibrationHFOV(objectWidth,distance,fraction){
    if(![objectWidth,distance,fraction].every(v=>Number.isFinite(v)&&v>0)||fraction>=1)throw new Error('Inserisci misure positive e allinea i riferimenti all’oggetto.');
    const value=degrees(2*Math.atan(objectWidth/(2*distance*fraction)));
    if(value<=5||value>=170)throw new Error('Le misure producono un campo visivo fuori intervallo.');
    return value;
  }
  function browserCalibrationKey(settings){
    return JSON.stringify(['web-v1',settings.deviceId||'anonymous',settings.width,settings.height,settings.zoom??null,settings.resizeMode??null,settings.facingMode??null,settings.frameRate??null]);
  }
  root.OpticalMath={targetHFOV,project,calibrationHFOV,browserCalibrationKey};
  if(typeof module!=='undefined')module.exports=root.OpticalMath;
})(globalThis);
