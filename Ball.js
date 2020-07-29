class Ball{
    constructor(x,y){
        var options = {
            isStatic: false,
            friction: 1,
            density: 1.2,
            restitution: 0.5
        }
        this.body = Bodies.circle(x,y,25,options);
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        fill(32,178,180)
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,12,12);
    }
}