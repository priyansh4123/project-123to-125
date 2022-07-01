diffrence=0;
rightwrist=0;
leftwrist=0;
name1="";
function setup(){
    canvas=createCanvas(550,500);
    canvas.position(590,130);
    video=createCapture(VIDEO);
video.size(550,500);
posenet=ml5.poseNet(video,modelLoaded);
posenet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log("model loaded");
}
function gotPoses(results){
    if (results.length > 0){
        console.log(results);
    leftwrist=results[0].pose.leftWrist.x;
    rightwrist=results[0].pose.rightWrist.x;
    diffrence=floor(leftwrist-rightwrist);
    console.log("leftwristx= "+leftwrist+" rightwristx= "+rightwrist+" diffrence= "+diffrence);
    }
}
function draw() {
    background("blue");
    document.getElementById("span-2").innerHTML="Text size will be= "+diffrence+"px";
textSize(diffrence);
name1=document.getElementById("name").value;
fill("yellow");
text(name1,50,400);

}