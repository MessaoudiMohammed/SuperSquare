class Land {
    height = 25;
    width = 0;
    y = canvas.height - this.height;
    x = -5;
    isnewLandAdded = false;
    constructor(width) {
        if (width) {
            this.width = width;
        } else {
            while (this.width < canvas.width / 2) {
                this.width = Math.random() * canvas.width;
            }
            this.x = canvas.width;
        }
        for (let i = 0; i < Math.random() * 5; i++) {
            pipes.push(new Pipe(this));
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
        // console.log(canvas.width - this.x - this.width);
        if (canvas.width - this.x - this.width >= 150 && this.isnewLandAdded === false) {
            this.isnewLandAdded = true;
            lands.push(new Land());
        }
    }
}