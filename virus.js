class Virus {

    constructor (x,y){

        //define width and height & visibility
        this.width=120;
        this.height=100;
        this.visibility = 255 

        //give restitution, friction and density options
        var options = {
            restitution : 0.8,
            friction : 1,
            density:1,
            isStatic: true
        }

        //add image
        this.image=loadImage("virusImg.png");

        //create  body
        this.body = Bodies.rectangle (x, y, this.width, this.height, options);

        //add body to world
        World.add (myWorld, this.body );

    }

    display (){

        if ( this.body.speed < 3) {
            
            
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

        }   else {

            //slow vanishing effect
            
            World.remove (myWorld,this.body);
            push ();
            this.visibility-=4;
            tint (255, this.visibility);
            image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
            pop ();


            }

    }


}