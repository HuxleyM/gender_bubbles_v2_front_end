class identityCircle{

    constructor(details, canvas){

        this.canvas = canvas;
    
        this.identity = details.identity;
        this.quanitity = details.quanitity;
        this.total = details.total; 
        this.decimalRatio = details.quantity / details.total;
        this.radius = this.decimalRatio * this.canvas.width / 5;
        this.x = Math.random() * (this.canvas.width - this.radius * 2) + this.radius;
        this.y = Math.random() * (this.canvas.height - this.radius * 2) + this.radius;
     
        this.dx = Math.random() * (2.5 - -2) +- 2;   // adjust speed little fast right now.
        this.dy = Math.random() * (2.5 - -2) +- 2; 
        //
        this.maxRadius = this.canvas.width / 5;
        this.minRadius = this.radius;
        // //
        // this.color = colorArray[Math.floor(Math.random() * colorArray.length)];
        this.color = 'blue';
        //this.chosen = false;
    }

    draw(){
        this.canvas.context.beginPath();
        this.canvas.context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        this.canvas.context.fillStyle = this.color;
        this.canvas.context.fill();
        
        if(this.chosen){
            this.canvas.context.strokeStyle = 'black';
            this.canvas.context.lineWidth = 5;
            this.canvas.context.stroke();
        }
    }


    

    updateSelf(){
      
        //velocity and bouncing
        if(this.x > this.canvas.width || this.x - this.radius < 0){
            this.dx = -this.dx;
        }
    
        if( this.y + this.radius > this.canvas.height || this.y - this.radius < 0){
            this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;

        //interactivity 
    //   if((Mouse.x - this.x) < 50 && (Mouse.x - this.x) > -50
    //         && (Mouse.y - this.y) < 50 && (Mouse.y - this.y) > -50){
    //             if(this.radius < this.maxRadius){
    //                 this.radius += 1;
    //             }
    //            if(Mouse.click){
    //                 if(!chosenCircle || chosenCircle.identity !== this.identity){
    //                     swap(this);
    //                     thoughts(this.identity, this.quanitity);
    //                 }
    //                 Mouse.click = false;
    //             }
    //     } 
    //     else {
            
    //         if(this.radius > this.minRadius){
    //             this.radius -=1;
    //         }
    //     }
  
        this.draw();
    }
}

export default identityCircle