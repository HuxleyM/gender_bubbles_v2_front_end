class CanvasBase {
    constructor(){
        this.canvas = document.querySelector('canvas');
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.context = this.canvas.getContext('2d');
    }

   updateCanvasDimensions(){
        this.canvas.height = window.innerHeight;
        this.canvas.width = window.innerWidth; 
    }

    draw(){
        this.canvas.context.beginPath();
        //this.canvas.context.arc(20,20, 10, 0, Math.PI * 2, false)
        this.canvas.context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        this.canvas.context.fillStyle = this.color;
        this.canvas.context.fill();
    }

    update(array){
      array.map(x => x.updateSelf())
    }

    clear(){
        this.context.clearRect(0,0, window.innerWidth, window.innerHeight);
    }
}

export default CanvasBase;