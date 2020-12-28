let width  = 514;
let height = 739;
let gravity = 0.03;
let spring  = 0.005;
let friction = -0.6

let objects = [];

function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

class Box {
    constructor(x, y, lx, ly, angle, color) {
        this.x = x;
        this.y = y;
        this.r = 0.20*(lx + ly);
        this.m = Math.PI*this.r*this.r;
        this.vx = 0.000001;
        this.vy = 0.000001;
        this.color = color;
        this.morph = [];
        this.morphed = false;
        this.uuid = uuidv4();

        this.shape = [];
        this.alpha = Math.atan2(ly, lx);
        this.angle = Math.PI / 180. * angle ;
        this.d = Math.sqrt(lx*lx + ly*ly);

        // A rectangle is a bunch of vertices along straight lines
        // First side
        let beta = 0;
        let x1 = this.d*Math.cos(        + this.alpha + this.angle);
        let y1 = this.d*Math.sin(        + this.alpha + this.angle);
        let x2 = this.d*Math.cos(Math.PI - this.alpha + this.angle);
        let y2 = this.d*Math.sin(Math.PI - this.alpha + this.angle);
        for (let i = 0; i < 10; i += 1) {
            this.morph.push(createVector(((10-i)*x1 + i*x2)/10, ((10-i)*y1 + i*y2)/10));
        }
        // Next side
        x1 = x2
        y1 = y2
        x2 = this.d*Math.cos(Math.PI + this.alpha + this.angle)
        y2 = this.d*Math.sin(Math.PI + this.alpha + this.angle)
        for (let i = 0; i < 10; i += 1) {
            this.morph.push(createVector(((10-i)*x1 + i*x2)/10, ((10-i)*y1 + i*y2)/10));
        }
        // Next side
        x1 = x2
        y1 = y2
        x2 = this.d*Math.cos(        - this.alpha + this.angle)
        y2 = this.d*Math.sin(        - this.alpha + this.angle)
        for (let i = 0; i < 10; i += 1) {
            this.morph.push(createVector(((10-i)*x1 + i*x2)/10, ((10-i)*y1 + i*y2)/10));
        }
        // Last side
        x1 = x2
        y1 = y2
        x2 = this.d*Math.cos(        + this.angle + this.alpha)
        y2 = this.d*Math.sin(        + this.angle + this.alpha)
        for (let i = 0; i < 10; i += 1) {
            this.morph.push(createVector(((10-i)*x1 + i*x2)/10, ((10-i)*y1 + i*y2)/10));
        }

        for (let angle = 0; angle < 360; angle += 9) {
            let v = p5.Vector.fromAngle(radians(angle + this.angle));
            v.mult(this.r);
            this.shape.push(v);
        }
    }

    display() {
        strokeWeight(0);
        fill(this.color);
        beginShape();
        // console.log(beta);
        this.morph.forEach(v => {
            if (Math.random() < 0.2) {
              let dx = Math.floor(Math.random() * 3);
              let dy = Math.floor(Math.random() * 3);
              vertex(this.x + v.x + dx, this.y + v.y + dy);
            } else {
              vertex(this.x + v.x, this.y + v.y);
            }
        });
        endShape(CLOSE);

        strokeWeight(1);
        beginShape(LINES);
        vertex(this.x, this.y);
        vertex(this.x + 10*this.vx, this.y + 10*this.vy);
        console.log(this.x, this.y, this.vx, this.vy);
        endShape();
    }

    update() {
        if (!this.morphed) {
            let totalDistance = 0;
            let v1, v2;
            for (let i = 0; i < this.shape.length; i++) {
                // v1 is the target
                v1 = this.shape[i];
                // Get the vertex we will draw
                v2 = this.morph[i];
                // Lerp to the target
                v2.lerp(v1, 0.01);
                // Check how far we are from target
                totalDistance += p5.Vector.dist(v1, v2);
            }
            if (totalDistance < 1) {
                this.morphed = true
            } 
        } else {
            //
            // Fall ;-)
            //
            this.vy += gravity;
            this.x += this.vx;
            this.y += this.vy;

            objects.forEach(that => {
                console.log(this.uuid, that.uuid);
                if (this.uuid != that.uuid) {
                    console.log(this.x, this.y, that.x, that.y);
                    let dx = this.x - that.x;
                    let dy = this.y - that.y;
                    let distance = Math.sqrt(dx*dx + dy*dy);
                    let minDist = this.r + that.r;
                    console.log(dx, dy, "distance: ", distance, this.r, that.r);
                    if (distance < minDist) {
                    /**
                        let theta1 = Math.atan2(this.vy, this.vx);
                        let theta2 = Math.atan2(that.vy, that.vx);
                        console.log("theta ", theta1, theta2);
                        let m11 = (this.m + this.m) / (this.m + that.m);
                        let m22 = (that.m + that.m) / (this.m + that.m);
                        let m12 = (this.m - that.m) / (this.m + that.m);
                        console.log("m ", m11, m22, m12);
                        let v1 = Math.sqrt(Math.pow(( m12*this.vy + m22*that.vy), 2) + Math.pow(this.vx, 2));
                        let v2 = Math.sqrt(Math.pow((-m12*that.vy + m11*this.vy), 2) + Math.pow(that.vx, 2));
                        console.log("v12 ", v1, v2, this.vx, this.vy, that.vx, that.vy);
                        let t1 = Math.atan( m12*Math.tan(theta1) + m22*that.vy/this.vx);
                        let t2 = Math.atan(-m12*Math.tan(theta2) + m11*this.vy/that.vx);
                        console.log("t12 ", t1, t2);
                        this.vx = v1*Math.cos(t1);
                        this.vy = v1*Math.sin(t1);
                        that.vx = v2*Math.cos(t2);
                        that.vy = v2*Math.sin(t2);
                        console.log("v1", this.vx, this.vy);
                        console.log("v2", that.vx, that.vy);
                    **/
                        let angle = atan2(dy, dx);
                        let targetX = this.x + cos(angle) * minDist;
                        let targetY = this.x + sin(angle) * minDist;
                        let ax = (targetX - that.x) * spring;
                        let ay = (targetY - that.y) * spring;
                        this.vx -= ax;
                        this.vy -= ay;
                        that.vx += ax;
                        that.vy += ay;
                    }
                }
            });
            //
            // Check collisions with walls
            //
            if (this.x + this.r > width) {
                this.x = width - this.r;
                this.vx *= friction;
            } else if (this.x - this.r < 0) {
                this.x = this.r;
                this.vx *= friction;
            }
            if (this.y + this.r > height) {
                this.y = height - this.r;
                this.vy *= friction;
            } else if (this.y - this.r < 0) {
                this.y = this.r;
                this.vy *= friction;
            }

        }
    }
}

class Sphere {
    constructor(x, y, r, color) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.m = Math.PI*this.r*this.r;
        this.vx = 0.000001;
        this.vy = 0.000001;
        this.color = color;
        this.morph = []
        this.morphed = true
        this.uuid = uuidv4()

        for (let angle = 0; angle < 360; angle += 9) {
            let v = p5.Vector.fromAngle(radians(angle - 135));
            v.mult(r);
            this.morph.push(v);
        }
    }

    display() {
        strokeWeight(0);
        fill(this.color);
        beginShape();
        this.morph.forEach(v => {
            if (Math.random() < 0.2) {
                let dx = Math.floor(Math.random() * 3);
                let dy = Math.floor(Math.random() * 3);
                vertex(this.x + v.x + dx, this.y + v.y + dy);
            } else {
                vertex(this.x + v.x, this.y + v.y);
            }
        });
        endShape(CLOSE);
    }

    update() {
        this.vy += gravity;
        this.x += this.vx;
        this.y += this.vy;

        //
        // Check collisions with walls
        //
        if (this.x + this.r > width) {
            this.x = width - this.r;
            this.vx *= friction;
        } else if (this.x - this.r < 0) {
            this.x = this.r;
            this.vx *= friction;
        }
        if (this.y + this.r > height) {
            this.y = height - this.r;
            this.vy *= friction;
        } else if (this.y - this.r < 0) {
            this.y = this.r;
            this.vy *= friction;
        }
    }
}

function setup() {
    createCanvas(width, height);
    objects.push(new Sphere(100, 70, 90, color(184, 0, 0)));
    objects.push(new Box(250, 300, 180, 12, 350, color(232, 193, 4)));
    objects.push(new Box(340, 340, 280, 5, 255, color(2, 3, 153)));
    objects.push(new Box(270, 100, 30, 5, 345, color(2, 3, 153)));
    objects.push(new Box(350, 200, 80, 80, 295, color(0, 0, 0)));
    objects.push(new Box(200, 600, 130, 12, 280, color(232, 193, 4)));
    objects.push(new Box(234, 550, 100, 12, 280, color(184, 0, 0)));
}

function draw() {
    background(240);
    for (var i = 0; i < objects.length; i ++ ) {
        objects[i].update();
        objects[i].display();
    }
}
