
function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,500);
    canvas.position(560,150);
    posenet=ml5.poseNet(video,modelLoaded)
    posenet.on('pose',gotPoses)
}
function draw(){
    background('#969A97');
    fill('#a1f542');
}
function modelLoaded(){
    console.log('Posenet is initialized!')
}