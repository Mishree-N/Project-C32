class Vaccine {

    constructor (x,y){

        //define width and height
        this.width=100;
        this.height=100;

        //give restitution, friction and density options
        var options = {
            restitution : 0.04,
            friction : 1,
            density:1,
        }

        //add image
        this.image=loadImage("vaccineImg.png");

        //create  body
        this.body = Bodies.rectangle (x, y, this.width, this.height, options);

        //add body to world
        World.add (myWorld, this.body );

    }

    display (){

        //make pos variable to control position
        var pos =this.body.position;

        //control angle
        var angle=this.body.angle;

        
        push ();

        //change the position of the origin to body's position
        translate (pos.x,pos.y);

        //this is required to make rotate work
        angleMode (RADIANS);

        //Rotate the body on body's angle
        rotate (angle);

        //make imageMode center
        imageMode (CENTER);

        //create and display
        image(this.image, 0, 0, this.width, this.height);
        
        pop ();

    }


}