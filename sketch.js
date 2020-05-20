// let p = new Perceptron();
let char = null;
function setup() {
    createCanvas(canvas.width, canvas.height);
    char = new Square();
}
land = new Land(canvas.width + 50);
function draw() {
    background("#7ce1ff");
    land.show();
    if (char.alive) {
        move();
        char.update();
        char.show();
    }

}
function move() {
    if (keyIsDown(68)) {
        char.move(RIGHT);
    }
    if (keyIsDown(65)) {
        char.move(LEFT);
    }
    if (keyIsDown(83)) {
        char.move(DOWN);
    }
}
function keyPressed() {
    if (key === "w")
        char.move(UP);
}
function keyReleased() {
    if (key === "s") {
        char.move(NORMAL)
    }
}