import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import youtube from './components/api/youtube';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';
import NavBar from './components/NavBar';

export class App extends Component {
  state = { videos: [], selectedVideo: null };

  onTermSubmit = async term => {
    console.log(term);

    const res = await youtube.get('/search', {
      params: {
        q: { term }
      }
    });
    this.setState({
      videos: res.data.items,
      selectedVideo: res.data.items[0]
    });
  };

  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <>
        {' '}
        <NavBar />
        <div className="ui container">
          <SearchBar onTermSubmit={this.onTermSubmit} />
          <div className="ui grid">
            <div className="ui row">
              {' '}
              <div className="eleven wide column">
                <VideoDetail video={this.state.selectedVideo} />
              </div>
              <div className="five wide column">
                <VideoList
                  onVideoSelect={this.onVideoSelect}
                  videos={this.state.videos}
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
