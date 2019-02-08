import React from 'react';
import { Video } from './components/Video';
import { Menu } from './components/Menu';
import './App.css'; // getting style 

const VIDEOS = {
  fast: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4',
  slow: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-slow.mp4',
  cute: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-cute.mp4',
  eek: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-eek.mp4'
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { src: VIDEOS.fast };
    this.updateSrc = this.updateSrc.bind(this);
  }

  updateSrc(src){
    this.setState({
      src: VIDEOS[src]
    })
  }

  render() {
    return (
      <div>
        <h1>Video Player</h1>
        <Menu updateSrc={this.updateSrc} />
        <Video src={this.state.src} />
      </div>
    );
  }
}

export default App;