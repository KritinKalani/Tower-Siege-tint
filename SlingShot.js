class SlingShot{
    constructor(bodyA,pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.01,
            length: 10
        }
        this.slingshot = Constraint.create(options);
        World.add(world,this.slingshot);
    }
    fly(){
        this.slingshot.bodyA = null;
    }
    display(){
        if(this.slingshot.bodyA){
        var BodyA = this.slingshot.bodyA.position;
        var PointB = this.slingshot.pointB;
        strokeWeight(4);
        line(BodyA.x,BodyA.y,PointB.x,PointB.y)
        }
    }
    attach(body){
        this.slingshot.bodyA = body;
    }
}