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
        console.log(this.canvas.innerHeight);
    }

    animate(array){
        this.clear();
        this.update(array);
    }

    update(array){
      //array.map(x => x.updateSelf())
    }

    clear(){
        this.context.clearRect(0,0, window.innerWidth, window.innerHeight);
    }
}

export default CanvasBase;