class Square {
    width = 25;
    height = 25;
    x = canvas.width / 5;
    y = canvas.height / 2;
    gravity = .5;
    alive = true;
    jumpDistance = 50;
    isJump = false;
    _color = [255, 110, 20];
    show() {
        fill(this._color[0], this._color[1], this._color[2]);
        rect(this.x, this.y, this.width, this.height);
    }
    update() {
        if (this.alive == true && this.y < canvas.height) {
            this.y += this.gravity;
            this.gravity++;
        } else {
            this.alive = false;
        }
        this.landTouched();
        this.pipeTouched();
    }
    landTouched() {
        if (this.alive) {
            if (land.x <= this.x && land.x + land.width >= this.x) {
                if (this.y > land.y - this.height) {
                    this.y = land.y - this.height;
                    this.gravity = 0
                }
            }
        }
        if (this.y <= 0) {
            this.y = 0;
        }
        if (this.x + this.width >= canvas.width) {
            this.x = canvas.width - this.width;
        }
        if (this.x <= 0) {
            this.x = 0;
        }
    }
    pipeTouched() {
        let closestPipe = pipes[0];
        pipes.map((pipe, index) => {
            if (index > 0) {
                let x, y;
                if (closestPipe.x < 0) {
                    x = closestPipe.x * -1;
                } else {
                    x = closestPipe.x;
                }
                if (pipe.x < 0) {
                    y = pipe.x * -1;
                } else {
                    y = pipe.x;
                }

                if (Math.abs(x - this.x) > Math.abs(y - this.x)) {
                    closestPipe = pipe;
                }
            }
        });

        if (this.y + this.height >= closestPipe.y - closestPipe.h1
            && this.x + (this.width * 75 / 100) >= closestPipe.x - (closestPipe.w1 - closestPipe.w2) / 2
            && this.x + (this.width * 25 / 100) <= closestPipe.x - (closestPipe.w1 - closestPipe.w2) / 2 + closestPipe.w1
        ) {
            this.y = closestPipe.y - closestPipe.h1 - this.height;
        }
        if (closestPipe.x - (closestPipe.w1 - closestPipe.w2) / 2 < this.x + this.width
            && closestPipe.x + closestPipe.w1 > this.x + this.width
            && this.y > closestPipe.y - closestPipe.h1) {
            this.x = closestPipe.x - (closestPipe.w1 - closestPipe.w2) / 2 - this.width;
        }
        if (closestPipe.x - (closestPipe.w1 - closestPipe.w2) / 2 + closestPipe.w1 > this.x
            && closestPipe.x + closestPipe.w1 < this.x + this.width / 2
            && this.y > closestPipe.y - closestPipe.h1) {
            this.x = closestPipe.x - (closestPipe.w1 - closestPipe.w2) / 2 + closestPipe.w1;
        }
        if (closestPipe.isContainsArc) {
            if (this.x + this.width >= closestPipe.x + (closestPipe.w1 + closestPipe.arc.size / 2) / 3.5
                && this.y + this.height >= closestPipe.y - closestPipe.arc.size
                && this.x <= closestPipe.x + (closestPipe.w1 + closestPipe.arc.size / 2) / 3.5
            ) {
                this._color = [255, 0, 0];
                this.alive = false;
            }
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
                    this.gravity = -13;
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
            pipes.forEach(pipe => {
                pipe.move(direction);
            });
        }
    }

}