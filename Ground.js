class Ground{
    constructor(x,y){
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,400,10,options);
        this.width = 300;
        this.height = 10;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        fill(200)
        rect(pos.x,pos.y,this.width,this.height);
    }
};