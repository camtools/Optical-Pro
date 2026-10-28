const assert=require('node:assert/strict');
const {targetHFOV,project,calibrationHFOV}=require('../optics.js');
const deg=x=>x*180/Math.PI;
const near=(a,b,t=1e-9)=>assert.ok(Math.abs(a-b)<t,`${a} != ${b}`);
// Reference pinhole: a 36 x 24 gate and 50 mm lens have these actual spans at 10 m.
for(const aspect of [1,1.33,16/9,1.85,2.39,9/16]){
  const width=Math.min(36,24*aspect);
  near(2*10000*Math.tan(targetHFOV(36,24,50,aspect)*Math.PI/360),10000*width/50);
}
// An anamorphic gate must be desqueezed before applying delivery crop.
near(targetHFOV(24,18,50,2.39,2),deg(2*Math.atan(18*2.39/100)));
near(targetHFOV(24,18,50,4/3),deg(2*Math.atan(24/100)));
// A known-size, centred target recovers the true camera FOV.
for(const fov of [35,65,73,100,120]){
  const distance=200,width=40,fraction=width/(2*distance*Math.tan(fov*Math.PI/360));
  near(calibrationHFOV(width,distance,fraction),fov);
}
// Exact source field = target field: source edges coincide with frame edges.
const same=project(1920,1080,65,65,{x:37,y:42,width:640,height:360});
near(same.x,37);near(same.y,42);near(same.width,640);near(same.height,360);assert.equal(same.covered,true);
// A target of half the tangent angle shows exactly the central half of the source.
const narrow=deg(2*Math.atan(Math.tan(65*Math.PI/360)/2));
const zoom=project(1920,1080,65,narrow,{x:0,y:0,width:640,height:360});
near(zoom.width,1280);near(zoom.x,-320);near(zoom.y,-180);
// Scaling UI or output resolution never changes the visible physical scene.
for(const ar of [1,16/9,2.39,9/16])for(const scale of [0.5,1,2,3]){
  const a=project(1920,1080,73,47,{x:11,y:29,width:600,height:600/ar});
  const b=project(1920,1080,73,47,{x:11*scale,y:29*scale,width:600*scale,height:600/ar*scale});
  for(const key of ['x','y','width','height'])near(a[key]*scale,b[key],1e-7);
}
// Coverage checks BOTH axes. Same horizontal FOV does not cover a square frame.
assert.equal(project(1920,1080,65,65,{x:0,y:0,width:500,height:500}).covered,false);
assert.equal(project(1920,1080,40,90,{x:0,y:0,width:640,height:360}).covered,false);
for(const bad of [NaN,Infinity,0,-1])assert.throws(()=>targetHFOV(36,24,bad,16/9));
assert.throws(()=>project(1920,1080,NaN,65,{x:0,y:0,width:640,height:360}));
assert.throws(()=>calibrationHFOV(100,0,.5));assert.throws(()=>calibrationHFOV(100,100,1));
console.log('PASS: reference pinhole, delivery crop, anamorphic gate, measured calibration, common source/preview/export geometry, both-axis coverage, invalid input');
