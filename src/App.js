import React, { Component, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

import CanvasBase from './canvas/canvas';
import animateLoop from './canvas/animate.js';
import identityCircle from './canvas/identityCircle';

var details = {
  identity : 'femme',
  quantity : 2, 
  total : 3
}




function App(){

  useEffect(()=>{
 
    var canvas = new CanvasBase();
  
    var aCircle = [new identityCircle(details, canvas)];


    if(canvas.context){
      requestAnimationFrame(()=>{ animateLoop.run(canvas, aCircle)});
    };

    window.addEventListener('resize', () => canvas.updateCanvasDimensions()) 
  })
  
  return (<canvas>Your browser doesnt support canvas :0 </canvas>)
}

export default App;
