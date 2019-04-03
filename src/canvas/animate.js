var animateLoop = (function(){
   function run(object, circles){
       console.dir(object)
        requestAnimationFrame(()=>{ run(object, circles) })
        object.clear();
        object.update(circles);       
   }


   return {
       run : run
   }
})();

export default animateLoop;