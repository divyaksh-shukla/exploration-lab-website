function Star() {
    this.x = random(width);
    this.y = random(height);
    this.xspeed = random(-0.7,0.7);
    this.yspeed = random(-0.7,0.7);

    this.show = function() {
        fill('#888');
        ellipse(this.x, this.y, 4, 4);
    }

    this.update = function() {
        this.x = this.x + this.xspeed;
        this.y = this.y + this.yspeed;

        distToMouse = dist(this.x, this.y, mouseX, mouseY);
        if(distToMouse < mouseThresh) {
            let base = dist(this.x, mouseY, mouseX, mouseY);
            this.x += mouseThresh * cos(acos(base/distToMouse));

            let height = dist(mouseX, this.y, mouseX, mouseY);
            this.y += mouseThresh * sin(asin(height/distToMouse));
        }
    }

    this.offscreen = function() {
        // console.log('calling offscreen');
        if (this.x >= width || this.x < 0) {
            this.xspeed = -this.xspeed;
        }
        if (this.y >= height || this.y < 0) {
            this.yspeed = -this.yspeed;
        }
        return false;
        // if(this.x < width && this.x > 0 && this.y < height && this.y > 0) {
        //     return false;
        // }
        // else {
        //     this.xspeed = -this.xspeed;
        //     this.yspeed = -this.yspeed;
        //     return false;
        // }
    }

    this.cluster = function(stars) {
        for (var i = 0 ; i < n_stars ; i++) {
            // console.log(dist(this.x, this.y, stars[i].x, stars[i].y));
            if(dist(this.x, this.y, stars[i].x, stars[i].y) < thresh) {
                // console.log("cluster");
                stroke('#888');
                strokeWeight(0.2)
                line(this.x, this.y, stars[i].x, stars[i].y);
            }
        }
    }
}