import React, { Component, useEffect } from 'react';
import CanvasBase from './canvas';


function setupCanvas () {

    useEffect(()=>{
      const canvasBase = new CanvasBase();
      canvasBase.animate();

    })
    
    return <canvas> Your browser doesnt support canvas :0 </canvas>
    
}

export default setupCanvas;