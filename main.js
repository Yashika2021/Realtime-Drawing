noseX = 0;
noseY = 0;
leftWristX = 0;
rightWristX = 0;
difference = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550, 420);
    video.position(50, 100);
    canvas = createCanvas(600,420);
    canvas.position(630, 100);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw(){
    background("#969A97");
    fill("#BFA78C");
    stroke("#bfbb8c");
    square(noseX, noseY, difference);
}
function modelLoaded(){
    console.log("Model Loaded");
}
function gotPoses(results){
    if(results.length > 0 ){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose X = " +noseX + "nose Y = " +noseY);
        rightWristX = results[0].pose.rightWrist.x;
        leftWristY = results[0].pose.leftWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("right wrist x = " +rightWristX + "left wrist x = " + leftWristX + "difference = " +difference); 
    }
}