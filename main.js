noseX=0;
noseY=0;
difference=0;
rightWristX=0;
leftWristX=0;

function setup() {
    canvas = createCanvas(550, 550);
   
    video = createCapture(VIDEO);
   video.size(550,500);
   canvas.position(560,150);
   poseNet=ml5.poseNet(video,modelLoaded);
   poseNet.on('pose',gotPoses);
  }
  function modelLoaded()
  {
    console.log('ModelLoaded!');
  }
  function gotPoses(results){
if(results.lenght>0)
{
  noseX=results[0].pose.nose.x;
  noseY=results[0].pose.nose.y;
  leftWristX=results[0].pose.leftWrist.x;
  rightWristX=results[0].pose.rightWrist.x;
  difference=floor(leftWristX-rightWristX);
}
}
 
  function draw(){
  background("#e8eb34");
  document.getElementById("square_side").innerHTML="Width and height of a square will be = " + difference+"px";
  fill("#F90093");
  stroke("#F90093");
  square(noseX,noseY,difference);
  }

  
  
  
  