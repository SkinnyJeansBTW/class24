class Pig {
    //properties of pig
    constructor(x, y) {
    //displacement options
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      // creating rectangles 
      this.body = Bodies.rectangle(x, y,50,50, options);
      this.width = 50;
      this.height = 50;
      // adding a pig to world
      World.add(world, this.body);
    }
    //function of pig
    display(){
      //position of pig
      var pos =this.body.position;
      //position of angle
      var angle = this.body.angle;
      //pushing component
      push();
      //translate position
      translate(pos.x, pos.y);
      //rotation of pig
      rotate(angle);
      //bringing to centre
      rectMode(CENTER);
     //colour of pig
      fill(255);
      //creating rectangle
      rect(0, 0, this.width, this.height);
      //removing the component
      pop();
    }
  };
  