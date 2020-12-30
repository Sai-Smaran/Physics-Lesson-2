class Pendulum {
    constructor(x, y, color) {
        var options={
            'restitution': 1.0,
            'friction': 0.0,
            'frictionAir': 0.0,
            'slop': 1,
            'inertia': Infinity
        };
        this.body = Bodies.circle(x, y, 50, options);
        this.color = color;
        World.add(world, this.body);
    }
    display(){
        var angle = this.body.angle;
        var color = this.color;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        strokeWeight(1);
        stroke("white");
        fill(color);
        ellipse(0, 0, 100, 100);
        pop();
    }
};