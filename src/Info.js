import React, { Component } from 'react';
import Skills from './Skills'

class Info extends Component {
  render() {
    return (
      <div className="info">
          <h1 className="header">mockturtlesoup</h1>
          <h3 className="header-small">a front-end developer who is probably hurting your eyes right now</h3>
          <Skills />
      </div>
    );
  }
}

export default Info;
