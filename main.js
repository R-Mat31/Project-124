function setup(){
 vid = createCapture(VIDEO);
 vid.size(500, 500);
 canvas = createCanvas(450, 375);
 canvas.position(550, 175);
 poseNet = ml5.poseNet(vid, model_loaded);
 poseNet.on("pose", got_poses);
}
function draw(){
 background("#cafc03");
}
function model_loaded(){
 console.log("Pose Net is initialised.");
}
function got_poses(results){
 if(results.length > 0){
  console.log(results);
 }
}