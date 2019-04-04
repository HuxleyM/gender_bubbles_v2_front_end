var colors = (function(){
    const colors = [  
        '#2a9d8f',
        '#e9c46a',
        '#f4a261',
        '#e76f51',
        '#264653'
    ];

    function randomColor(){
        return colors[Math.floor(Math.random() * colors.length)]
    }

    return {
        randomColor : randomColor
    }
})()



class identityCircle{

    constructor(details, canvas){


    
        this.identity = details.identity;
        this.quanitity = details.quanitity;
        this.total = details.total; 

        this.canvas = canvas;
        this.radius = (details.quantity / details.total) * (this.canvas.canvas.width / 5);
        this.x = Math.random() * (this.canvas.canvas.width - (this.radius * 2)) + this.radius;
        this.y = Math.random() * (this.canvas.canvas.height -(this.radius * 2)) + this.radius;
        this.maxRadius = this.canvas.canvas.width / 5;
        this.minRadius = this.radius;

        this.dx = Math.random() * (2.5 - -2) +- 2;   // adjust speed little fast right now.
        this.dy = Math.random() * (2.5 - -2) +- 2; 
        this.color = colors.randomColor();
    }

    draw(){
        this.canvas.context.beginPath();
        this.canvas.context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        this.canvas.context.fillStyle = this.color;
        this.canvas.context.fill();
    }

    checkBounds(){
        if(this.x > this.canvas.canvas.width || this.x - this.radius < 0){
            this.dx = -this.dx;
        }
    
        if( this.y + this.radius > this.canvas.canvas.height || this.y - this.radius < 0){
            this.dy = -this.dy;
        }

    }
    updateSelf(){

        this.checkBounds();

        this.x += this.dx;
        this.y += this.dy;
  
        this.draw();
    }
}

export default identityCircle