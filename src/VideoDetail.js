import React from 'react';

const VideoDetail = props => {
  const videoId = props.currentVideo.id.videoId;
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="twelve wide column">
      <div className="ui raised segments">
        <div className="ui segment">
          <div className="ui embed">
            <iframe title={props.currentVideo.snippet.title} src={embedUrl} />
          </div>
        </div>
        <div className="ui segment">
          <h4>{props.currentVideo.snippet.title}</h4>
        </div>
        <div className="ui secondary segment">
          <p>{props.currentVideo.snippet.description}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoDetail;
