import React from 'react';

const VideoSearch = props => {
  return (
    <div className="sixteen wide column">
      <div className="ui secondary segment">
        <div className="ui huge fluid input">
          <input
            onChange={e => props.handleChange(e.target.value)}
            type="text"
            value={props.searchTerm}
          />
        </div>
      </div>
    </div>
  );
};

export default VideoSearch;
