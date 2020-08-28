import React from 'react';
import { OTPublisher, OTSubscriber } from 'opentok-react';
import CheckBox from './CheckBox';
import { Container } from 'semantic-ui-react'
import '../pages/chat.css';

class Publisher extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        audio: false,
        video: true,
        videoSource: 'camera'
      };
    }
      setAudio = (audio) => {
        this.setState({ audio });
      }
     
      setVideo = (video) => {
        this.setState({ video });
      }
     
      changeVideoSource = (videoSource) => {
        (this.state.videoSource !== 'camera') ? this.setState({videoSource: 'camera'}) : this.setState({ videoSource: 'screen' })
      }
     
      onError = (err) => {
        this.setState({ error: `Failed to publish: ${err.message}` });
      }
   
      render() {
        return (
             <OTPublisher 
              properties={{
                publishAudio: this.state.audio,
                publishVideo:  this.state.video,
                videoSource: this.state.videoSource === 'screen' ? 'screen' : undefined,
                height: '30vh',
                width: '30vw',
                // height: '100vh',
                // width: '100vw',
              }}

          ></OTPublisher>

        )};
  }
  export default Publisher;
