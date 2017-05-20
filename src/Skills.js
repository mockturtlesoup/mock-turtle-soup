import React, { Component } from 'react';

class Skills extends Component {
  log() {
    console.log('kjsdncsdjnlsj');
  }
  render() {
    return (
      <div className="skill">
        <p>I am currently working on a react/php app at ResearchGate, the headers and promos on our newly released Research Interests profile tab are my pride and joy right now. Next up, watch the top sixty pixels of the page -- if they look weirder than usual it is probably my fault.</p>
        <p>Prior to that, I was making a swipy-feedback-cards product called <a onMouseOver={this.log}href="https://loop-now.loopline-systems.com/login">LoopNow</a> . I have also dabbled in Loopline as well as loopline-systems and loop now websites (I think you may notice something of a theme here).</p>
        <p>If I could, I would probably write CSS all day. But life is not a fairytale so I spend most of my days with PHP.</p>
        <p>Unrelated fields of random expertise include: Medieval architecture, stories about stones from c.800 AD, XII-century British manuscripts and dinosaurs.</p>
      </div>
    );
  }
}

export default Skills;
