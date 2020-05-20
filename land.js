class Land {
    height = 25;
    width = 0;
    y = canvas.height - this.height;
    x = -10;
    constructor(width) {
        if (width) {
            this.width = width;
        } else {
            while (this.width < canvas / 2) {
                this.width = Math.random() * canvas.width;
            }
        }
    }
    show() {
        fill("#795548");
        rect(this.x, this.y, this.width, this.height);
    }
    move(direction) {
        if (direction === RIGHT) {
            this.x -= 2;
        }
    }
}