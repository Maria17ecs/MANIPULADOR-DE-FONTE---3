noseX=0;
noseY=0;
difference = 0;
rightWristX = 0;
leftWristX = 0;

  function setup() {
  video = createCapture(VIDEO);
  video.size(550, 500);

  createCanvas(800, 600);

  canvas = createCanvas(550, 550);
  canvas.position(560,150);

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log('PoseNet Is Initialized!');
}
function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("noseX = " + noseX +" noseY = " + noseY);

    leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x;
    difference = floor(leftWristX - rightWristX);

    console.log("leftWristX  = " + leftWristX  + " rightWristX = "+ rightWristX + " difference = " + difference);
  }
}
function draw() {
    background(220);
  
    text('MARIA', 10, 10);
    text('MARIA', 100, 100);
    text('MARIA', 200, 200);
    text('MARIA', 300, 300);
    text('MARIA', 400, 400);
    text('MARIA', 500, 500);
    text('MARIA', 600, 600);
    text('MARIA', 700, 700);
    
    document.getElementById("text.input").innerHTML = "Largura e altura serão = " + difference +"px";
    fill('#808080');
    stroke('#363636');
    square(noseX, noseY, difference);
}