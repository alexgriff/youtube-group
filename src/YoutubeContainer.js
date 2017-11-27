import React from 'react';
import VideoSearch from './VideoSearch';
import VideoDetail from './VideoDetail';
import VideoList from './VideoList';
import API_KEY from './keys.js';

class YoutubeContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      videos: [],
      currentVideo: { id: {}, snippet: {} },
      searchTerm: ''
    };
  }

  componentDidMount() {
    this.fetchVideos('turtles');
  }

  handleClick = id => {
    const currentVideo = this.state.videos.find(
      video => video.id.videoId === id
    );
    this.setState({ currentVideo });
  };

  handleChange = searchTerm => {
    this.setState({ searchTerm }, () => this.fetchVideos(searchTerm));
  };

  fetchVideos = searchTerm => {
    fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${API_KEY}&q=${searchTerm}&type=video`
    )
      .then(res => res.json())
      .then(data => {
        this.setState({ videos: data.items, currentVideo: data.items[0] });
      });
  };

  render() {
    const { videos, currentVideo } = this.state;

    return (
      <div className="ui grid container">
        YoutubeContainer
        <VideoSearch
          handleChange={this.handleChange}
          searchTerm={this.state.searchTerm}
        />
        <VideoDetail currentVideo={currentVideo} />
        <VideoList handleClick={this.handleClick} videos={videos} />
      </div>
    );
  }
}

export default YoutubeContainer;
