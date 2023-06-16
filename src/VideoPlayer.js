import React from 'react';
import YouTube from 'react-youtube';

const VideoPlayer = (props) => {
  // YouTube video ID
  const videoId = props.videoId;

  return (
    <div style={{height: "100%", width: "100%"}}>
      <YouTube style={{height: "100%", width: "100%"}} videoId={videoId} opts={props.opts} />
    </div>
  );
};

export default VideoPlayer;
