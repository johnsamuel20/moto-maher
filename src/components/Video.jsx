import React from 'react';
import ReactPlayer from 'react-player';
import AboutVideo from '../assets/fish.mp4'

const Video = () => {
  return (
    <div>
      <ReactPlayer
        url={AboutVideo}
        width="600px"
        height="400px"
        controls
      />
    </div>
  );
};

export default Video;