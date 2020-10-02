let bg;
var SS_Duck = [];


function preload() {
    bg = loadImage('assets/background.jpeg');
    for (let i = 0; i < 17; i++) {
        SS_Duck[i] = loadImage('assets/duck_sheet/tile0'+i+'.png');
    }
    //SS_Duck = loadSpriteSheet('duck_sheet.png',798/6,527/4,24);

}

function setup() {
    createCanvas(displayWidth, displayHeight);
    background(220);
    image(bg, 0, 0, displayWidth, displayHeight);
    //image(SS_Duck, 0, 0);
}

function draw() {
    for (var i=0; i<5; i++) {
        image(SS_Duck[i], random(width), random(height));
    }
}
