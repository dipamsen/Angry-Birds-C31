class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smoke = loadImage("sprites/smoke.png");
    this.path = [];
    
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
    if(this.body.position.x>220 && this.body.velocity.x>10){
      var pos = [this.body.position.x, this.body.position.y];
      this.path.push(pos);
    }
    for(var j=0; j<this.path.length; j++){
      image(this.smoke,this.path[j][0],this.path[j][1]);
    }

  }
}
