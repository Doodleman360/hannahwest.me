let bg, cnv;
let SS_Duck = [];
let potato, mouth;


function preload() {
    bg = loadImage('assets/background.jpeg');
    for (let i = 0; i < 19; i++) {
        SS_Duck[i] = loadImage('assets/duck_sheet/tile0'+i+'.png');
    }
    potato = loadImage('assets/potato_no_mouth.PNG')
    mouth = loadImage('assets/potato_mouth.PNG')
    //SS_Duck = loadSpriteSheet('duck_sheet.png',798/6,527/4,24);

}

function setup() {
    cnv = createCanvas(displayWidth, displayHeight);
    background(220);
    image(bg, 0, 0, displayWidth, displayHeight);
    imageMode(CENTER);
}

let index = 4;
let time = 0;
let xduck = 0;
let off = 0.0;
function draw() {
    time += deltaTime
    image(bg, displayWidth/2, displayHeight/2, displayWidth, displayHeight);

    //off = off + 0.05;
    //image(potato, width/2, height/2);
    //image(mouth, width/2, height/2+(noise(off)*30));

    xduck = xduck + (deltaTime / 50);
    if(xduck > width) {
        xduck = 0;
    }
    image(SS_Duck[index],xduck,displayHeight-(SS_Duck[index].height/2));
    if(time > 200) {
        time = 0;
        if (++index > 7) {
            index = 4;
        }
    }
}

function mousePressed(){

    window.open("https://instagram.com/clear_skies42", "_self");
}
