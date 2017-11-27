import React from 'react';

const VideoItem = ({ video, handleClick }) => (
  <div onClick={() => handleClick(video.id.videoId)} className="item">
    <div className="ui small image">
      <img src={video.snippet.thumbnails.default.url} alt="" />
    </div>
    <div className="content">{video.snippet.title}</div>
  </div>
);

export default VideoItem;
