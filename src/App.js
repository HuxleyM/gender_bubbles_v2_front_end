import React, { Component, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

import CanvasBase from './canvas/canvas';
import animateLoop from './canvas/animate.js';



function App(){

  useEffect(()=>{
    var canvas = new CanvasBase();

    console.log('re rendered');

    if(canvas.context){
      requestAnimationFrame(()=>{animateLoop.run(canvas)});
    };

    shouldComponentUpdate(){
      return false;
    }
  
 


    window.addEventListener('resize', () => canvas.updateCanvasDimensions())
    

  })
  return <canvas> Your browser doesnt support canvas :0 </canvas>
}

export default App;
