
rightwrist=0;
leftwrist=0;
difference=0;
function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,500);
    canvas.position(590,150);
    posenet=ml5.poseNet(video,modelLoaded)
    posenet.on('pose',gotPoses)
}
function modelLoaded(){
    console.log('Posenet is initialized!')
}
function gotPoses(results){
    if (results.length>0){
        console.log(results);
        leftwrist=results[0].pose.leftWrist.x;
        rightwrist=results[0].pose.rightWrist.x;
        difference=floor(leftwrist-rightwrist);

    }
}
function draw(){
    background('#969A97');
    fill('#a1f542');
    stroke('#00001');
    text("hello",50,400);
    textSize(difference)
}