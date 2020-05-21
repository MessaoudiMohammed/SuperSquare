class Pipe {
    h1 = 20;
    w1 = 50;
    w2 = 40;
    h2 = 0;
    x = Math.random() * canvas.width;
    y = 0;
    arc = {
        size: 35,
        neck: 5
    }
    // isContainsArc = false;
    isContainsArc = Math.random() > 0.5 ? true : false;
    background = [0, 255, 0];
    constructor(land) {
        this.parentLand = land;
        this.y=canvas.height - this.parentLand.height - 20
        while (this.h2 < canvas.height / 2) {
            this.h2 = Math.random() * canvas.height;
        }
        if (pipes.length === 0)
            while (this.x < canvas.width / 3) {
                this.x = Math.random() * canvas.width;
            }
        else {
            this.x += pipes[pipes.length - 1].x + Math.random() * canvas.width;
        }
    }
    show() {
        if (this.isContainsArc) {
            fill(255, 0, 0);
            arc(this.x + (this.w1 + this.arc.size / 2) / 3.5, this.y - this.arc.size, this.arc.size, this.arc.size, -QUARTER_PI, PI + QUARTER_PI, PIE);
        }
        fill(this.background[0], this.background[1], this.background[2]);
        rect(this.x - (this.w1 - this.w2) / 2, this.y - this.h1, this.w1, this.h1);
        fill(this.background[0], this.background[1], this.background[2]);
        rect(this.x, this.y, this.w2, this.h2);
    }
    move(direction) {
        if (direction === RIGHT) {
            this.x -= 2;
        }
    }
}