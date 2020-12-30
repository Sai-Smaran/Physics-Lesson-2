const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var base;
var pendulum1, pendulum2, pendulum3, pendulum4, pendulum5;
var sling1, sling2, sling3, sling4, sling5;

function setup() {
    var canvas = createCanvas(1200, 600)
    engine = Engine.create();
    world = engine.world;

    base = new Box(500, 80, 500, 100);

    pendulum1 = new Pendulum(300, 500, "black");
    pendulum2 = new Pendulum(400, 500, "black");
    pendulum3 = new Pendulum(500, 500, "black");
    pendulum4 = new Pendulum(600, 500, "black");
    pendulum5 = new Pendulum(700, 500, "black");

    sling1 = new Chain(pendulum1.body, {x:300, y:80});
    sling2 = new Chain(pendulum2.body, {x:400, y:80});
    sling3 = new Chain(pendulum3.body, {x:500, y:80});
    sling4 = new Chain(pendulum4.body, {x:600, y:80});
    sling5 = new Chain(pendulum5.body, {x:700, y:80});

}
function draw() {
    background(0);
    Engine.update(engine);

    base.display();

    pendulum1.display();
    pendulum2.display();
    pendulum3.display();
    pendulum4.display();
    pendulum5.display();

    sling1.display();
    sling2.display();
    sling3.display();
    sling4.display();
    sling5.display();
}
function keyPressed() {
    if(keyCode === 32) {
        Matter.Body.setPosition(pendulum1.body, {x:100, y:280});
    }
}