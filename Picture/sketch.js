function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}
// Tweak of Code from Nick Parsons

let img;
let mode = 0;

function preload() {
    img = loadImage('portrait.jpg');
}

function setup() {
    createCanvas(960, 640);
    img.loadPixels();
}

function mousePressed() {
    mode = (mode + 1) % 6
}

function draw() {
    for (let x = 0; x < img.width; x += 5) {
        for (let y = 0; y < img.height; y += 5) {
            i = 4 * (floor(y) * img.width + floor(x))
            const [r, g, b, a] = [img.pixels[i], img.pixels[i + 1], img.pixels[i + 2], img.pixels[i + 3]];
            strokeWeight(9 * Math.random())
            if (mode == 0) {
                stroke(b, r, g, a / (5 * Math.random()))
            } else if (mode == 1) {
                stroke(b, g, r, a / (5 * Math.random()))
            } else if (mode == 2) {
                stroke(g, r, b, a / (5 * Math.random()))
            } else if (mode == 3) {
                stroke(g, b, r, a / (5 * Math.random()))
            } else if (mode == 4) {
                stroke(r, g, b, a / (5 * Math.random()))
            } else {
                stroke(r, b, g, a / (5 * Math.random()))
            }
            line(x + 20 * Math.random(), y, x + 25, y + 25 * Math.random())
        }
    }
}