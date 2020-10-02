let bg;
let SS_Duck;


function preload() {
    bg = loadImage('assets/background.jpeg');
    for (let i = 0; i < 17; i++) {
        append(SS_Duck, loadImage('assets/duck_sheet/tile'+i+'.png'))
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
}
