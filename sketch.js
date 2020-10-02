let bg;
let SS_Duck;


function preload() {
    bg = loadImage('background.jpeg');
    //SS_Duck = loadSpriteSheet('duck_sheet.png',798/6,527/4,24);

}

function setup() {
    createCanvas(displayWidth, displayHeight);
    background(220);
    image(bg, 0, 0, displayWidth, displayHeight);
    //image(SS_Duck, 0, 0);
}

function draw() {
}
