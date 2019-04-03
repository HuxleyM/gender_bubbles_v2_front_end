var animateLoop = (function(){
   function run(object){
       console.dir(object)
        requestAnimationFrame(()=>{ run(object) })
        object.context.clearRect(0,0, window.innerWidth, window.innerHeight);

    //   object.update();
   }


   return {
       run : run
   }
})();

export default animateLoop;