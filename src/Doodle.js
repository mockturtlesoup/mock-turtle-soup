import React, { Component } from 'react';
import Info from './Info'

class Doodle extends Component {
  constructor(...args) {
    super(...args);
    
    this.state = this._readSize();
    
    this._doodle = this._doodle.bind(this);
    this._resizeListener = this._resizeListener.bind(this);
  }
  
  _getSize() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }
  
  render() {
    const {width, height} = this.state;
    return (
      <canvas
        className="doodle"
        ref={el => this._onCanvasRef(el)}
        width={width}
        height={height}
        onMouseMove={this.doodle}
        onTouchStart={this.doodle}
      />
    );
  }
  
  _onCanvasRef(el) {
    if (el) {
      const ctx = el.getContext('2d');
      this._ctx = ctx;
      ctx.lineJoin = 'round';
      ctx.lineCap = 'round';
      ctx.lineWidth = 400;
      ctx.beginPath();
      // ctx.globalCompositeOperation = 'multiply';
    } else {
      this._ctx = null;
    }
  }

  _doodle(e) {
    if (!this._ctx) {
      return;
    }
    const ctx = this._ctx;
    ctx.strokeStyle=`hsl(${e.nativeEvent.offsetY/4}, 100%, 90%)`;
    ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    ctx.stroke();
  }
  
  componentDidMount() {
    window.addEventListener('resize', this._resizeListener);
  }
  
  _resizeListener() {
    this.setState(this._getSize());
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this._resizeListener);
  }
}

export default Doodle;
