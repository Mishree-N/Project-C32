class rope {

    constructor (BodyX,PointY){

        var options = {

            bodyA : BodyX,
            pointB : PointY,
            stiffness : 0.02,
            length : 30
        }

        
        this.rope=Constraint.create(options);

        World.add(myWorld,this.rope);

    }

    display(){

        //if bodyA still has a value,
        if (this.rope.bodyA){

            var pointA, pointB;

            pointA=this.rope.bodyA.position;
            pointB=this.rope.pointB;

            line (pointA.x, pointA.y, pointB.x, pointB.y);
        }

    }

    fly (){

        //make value of bodyA nothing to make bird fly
        this.rope.bodyA = null;

    }

    attach(body){

        this.rope.bodyA=body;
    
    }

}



