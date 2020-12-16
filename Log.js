class Log {
 //properties of Bird
    constructor(x, y, height, angle) {
        //displacement options
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      // creating rectangles 
      this.body = Bodies.rectangle(x, y, 20, height, options);
      this.width = 20;
      this.height = height;
      //setting the angle
      Matter.Body.setAngle(this.body,angle);
      // adding a log to world
      World.add(world, this.body);
    }
    
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(4);
      stroke("green");
      fill(255);
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  