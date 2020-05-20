class Square {
    width = 25;
    height = 25;
    x = canvas.width / 5;
    y = canvas.height / 2;
    gravity = .5;
    alive = true;
    jumpDistance = 50;
    isJump = false;
    show() {
        fill(255, 110, 20);
        rect(this.x, this.y, this.width, this.height);
    }
    update() {
        if (this.alive == true && this.y < canvas.height) {
            this.y += this.gravity;
            this.gravity++;
        } else {
            this.alive = false;
        }
        this.landtouched();

    }
    landtouched() {
        if (land.x <= this.x && land.x + land.width >= this.x) {
            if (this.y > land.y - this.height) {
                this.y = land.y - this.height;
                this.gravity = 0
            }
        }
        if (this.y <= 0) {
            this.y = 0;
        }
    }
    move(direction) {
        if (this.x <= 0) {
            this.x = 0;
        }
        switch (direction) {
            case RIGHT:
                this.x += 5;
                break;
            case LEFT:
                this.x -= 5;
                break;
            case UP:
                if (this.y === land.y - this.height) {
                    this.y -= this.gravity;
                    this.gravity = -10;
                }
                break;
            case DOWN:
                this.height = this.width / 2;
                this.y = land.y;
                break;
            case NORMAL:
                this.height = this.width;
                break;
        }
        if (this.x > canvas.width / 4) {
            land.move(direction);
        }
    }
}