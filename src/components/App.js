import React from "react";
import Search from "./Search";
import VideoDetail from "./VideoDetail";
import VideoList from "./VideoList";
import axios from "axios";
import "./App.css";

// ENTER API KEY HERE!!!
const apiKey = " ";

class App extends React.Component {
  state = {
    videos: [],
    seletedVideo: null
  };

  apiCall = searchWord => {
    axios
      .get("https://www.googleapis.com/youtube/v3/search", {
        params: {
          part: "snippet",
          maxResult: 5,
          key: apiKey,
          q: searchWord
        }
      })
      .then(res =>
        this.setState({
          videos: res.data.items,
          selectedVideo: res.data.items[0]
        })
      );
  };

  searchDate = data => {
    if (data !== "") {
      this.apiCall(data);
    }
  };

  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };

  render() {
    if (this.state.videos.length === 0) {
      return (
        <div className="overall">
          <div className="customContainer">
            <h1>Youtube Clone</h1>
            <Search onSubmit={this.searchDate} />
          </div>
        </div>
      );
    }

    if (this.state.videos.length > 0) {
      return (
        <div className="ui container all">
          <div className="search-bar__videos">
            <Search onSubmit={this.searchDate} />
          </div>

          <div className="ui grid">
            <div className="ui row">
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
          <div />
        </div>
      );
    }
  }
}

export default App;
