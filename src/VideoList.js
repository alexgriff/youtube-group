import React from 'react';
import VideoItem from './VideoItem';

const VideoList = props => {
  const videos = props.videos.map(video => (
    <VideoItem
      handleClick={props.handleClick}
      key={video.id.videoId}
      video={video}
    />
  ));
  return (
    <div className="four wide column">
      <div className="ui relaxed items">{videos}</div>
    </div>
  );
};

export default VideoList;
