let bg, cnv;
var SS_Duck = [];


function preload() {
    bg = loadImage('assets/background.jpeg');
    for (let i = 0; i < 19; i++) {
        SS_Duck[i] = loadImage('assets/duck_sheet/tile0'+i+'.png');
    }
    //SS_Duck = loadSpriteSheet('duck_sheet.png',798/6,527/4,24);

}

function setup() {
    cnv = createCanvas(displayWidth, displayHeight);
    background(220);
    image(bg, 0, 0, displayWidth, displayHeight);
    imageMode(CENTER);
}

var index = 4;
var time = 0;
function draw() {
    time += deltaTime
    image(bg, displayWidth/2, displayHeight/2, displayWidth, displayHeight);
    image(SS_Duck[index],mouseX,mouseY)
    if(time > 200) {
        time = 0;
        if (++index > 7) {
            index = 4;
        }
    }
}

function mousePressed(){
    window.open("https://instagram.com/clear_skies42?igshid=3r0bobxrzoxt", "_self");
}
