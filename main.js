function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
}
function preload(){
    img=loadImage("bedroom.jpg");
}
function draw(){
    image(img,0,0,640,420);
    fill("#ed0c0c");
    text("bed",45,75);
    noFill();
    stroke("#ed0c0c");
    rect(30,60,450,350);
}