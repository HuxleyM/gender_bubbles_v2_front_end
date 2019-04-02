import React, { Component, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

import CanvasBase from './canvas/canvas';



function App(){

  useEffect(()=>{
    var canvas = new CanvasBase();
    var dummy = ['dummy'];
    requestAnimationFrame(()=> canvas.animate(dummy));
  
    window.addEventListener('resize', () => canvas.updateCanvasDimensions())
    

  })
  return <canvas> Your browser doesnt support canvas :0 </canvas>
}

export default App;
