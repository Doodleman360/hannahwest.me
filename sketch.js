let img;
function preload() {
    img = loadImage('background.jpeg');
}

function setup() {
    createCanvas(displayWidth, displayHeight);
    background(220);
    image(img, 0, 0);
}

function draw() {

}
