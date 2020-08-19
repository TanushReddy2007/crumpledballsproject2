class Paper {  
    constructor(x, y, radius){
        var options = {
            'restitution':0.5,
            'friction':1.0,
            'density':1.0,
            'isStatic' : false
        }
        this.body = Bodies.circle(x, y, radius, options);
	    World.add(world, this.body);
        this.radius = radius
        this.image = loadImage("paper.png")
        
   }
   display(){
    fill(34,34,34)
    imageMode(CENTER);
    ellipse(this.body.position.x, this.body.position.y, this.radius, this.radius) 
    ellipse(56, 46, 55, 55)  
    
    image(this.image, this.body.position.x, this.body.position.y, this.radius * 7, this.radius * 7)
   }
}