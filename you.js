class You {

    constructor (x,y){

        //define width and height
        this.width=100;
        this.height=300;

        //make its tatic
        var options = {
            isStatic : true
        }

        //add image
        this.image=loadImage("youImg.png");

        //create  body
        this.body = Bodies.rectangle (x, y, this.width, this.height, options);

        //add body to world
        World.add (myWorld, this.body );

    }

    display (){

        //make pos variable to control position
        var pos =this.body.position;

        
        push ();

        //change the position of the origin to body's position
        translate (pos.x,pos.y);

        //make imageMode center
        imageMode (CENTER);

        //create and display
        image(this.image, 0, 0, this.width, this.height);
        
        pop ();

    }


}