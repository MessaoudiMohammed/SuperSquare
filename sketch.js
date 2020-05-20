// let p = new Perceptron();
let char = null;
function setup() {
    createCanvas(canvas.width, canvas.height);
    char = new Square();
    oldX = char.x;
}
land = new Land(canvas.width + 50);
pipes = [new Pipe(50), new Pipe()];
function draw() {
    background("#7ce1ff");
    land.show();
    pipes.forEach(pipe => {
        pipe.show();
    });
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
    if (key === "w" || key === " ")
        char.move(UP);
}
function keyReleased() {
    if (key === "s") {
        char.move(NORMAL)
    }
}
