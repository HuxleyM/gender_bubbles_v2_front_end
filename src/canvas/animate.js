var animateLoop = (function(){
   function run(canvas, circles){
        requestAnimationFrame(()=>{ run(canvas, circles) })
        canvas.clear();
        canvas.update(circles);       
   }

   return {
       run : run
   }
})();

export default animateLoop;