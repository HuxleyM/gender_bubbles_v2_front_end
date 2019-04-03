class CanvasBase {
    constructor(){
        this.canvas = document.querySelector('canvas');
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.context = this.canvas.getContext('2d');
    }

   updateCanvasDimensions(){
        this.height = window.innerHeight;
        this.width = window.innerWidth; 
    }


    update(array){
      array.map(x => x.updateSelf())
    }

    clear(){
        this.context.clearRect(0,0, window.innerWidth, window.innerHeight);
    }
}

export default CanvasBase;