import React, { Component } from 'react';
import Info from './Info'

class Doodle extends Component {
  isdoodling(){

  }
  doodle(e) {
  const canvas = document.querySelector('#draw');
  const ctx = canvas.getContext('2d');
  ctx.lineJoin = 'round';
  ctx.lineCap = 'round';
  ctx.lineWidth = 400;
    // ctx.globalCompositeOperation = 'multiply';
  // let isDrawing = false;
  let lastX;
  let lastY;
  let hue;
  //   if (!isDrawing) return; // stop the fn from running when they are not moused down
    // console.log(e);
    ctx.strokeStyle=`hsl(${e.nativeEvent.offsetY/4}, 100%, 90%)`;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    ctx.stroke();
    lastX = e.nativeEvent.offsetX;
    lastY = e.nativeEvent.offsetY;
    console.log(lastX, lastY);
    console.log(ctx.strokeStyle);
    hue++;
    if (hue >= 360) {
      hue = 0;
    }
  }
  render() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    return (
        <canvas className="doodle" id="draw" width={width} height={height} onMouseMove={this.doodle} onTouchStart={this.doodle}></canvas>
    );
  }
}

export default Doodle;
