noseX=0;
noseY=0;
function preload(){
    clown=loadImage('https://i.postimg.cc/TYwTN448/download-removebg-preview.png');
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log('poseNet is initialized');
}
function draw(){
    image(video,0,0,300,300);
    fill(255,0,0);
    stroke(255,0,0);
    image(clown,noseX,noseY,30,30);
}
function take_snapshot(){
    save("myfilter.png");
}
function gotPoses(results){
    if (results.lenght>0){
        console.log(results);
        noesX=results[0].pose.nose.x-10;
        noesY=results[0].pose.nose.y-10;
        console.log("nose x="+noesX);
        console.log("nose y="+noesY);
    }
}
