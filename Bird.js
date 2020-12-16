class Bird {
    //properties of Bird
    constructor(x, y) {
    //displacement options
      var options = {
          'restitution':0.5,
          'friction':1.0,
          'density':1.5
      }
      // creating rectangles 
      this.body = Bodies.rectangle(x, y,50,50, options);
      this.width = 50;
      this.height = 50;
       // adding a bird to world
      World.add(world, this.body);
    }
     //function of bird
    display(){
     //position of pig
      var pos =this.body.position; 
      pos.x = mouseX;
      pos.y = mouseY; 
      //position of angle
      var angle = this.body.angle;
        //pushing component
      push();
      //tanslate position
      translate(pos.x, pos.y);
      //rotation of pig
      rotate(angle);
      //placement
      rectMode(CENTER);
      strokeWeight(3);
      stroke("blue");
      //colour
      fill("red");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  