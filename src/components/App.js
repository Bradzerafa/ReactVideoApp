import React from "react";
import Search from "./Search";
import VideoList from "./VideoList";
import axios from "axios";
import "./App.css";

// ENTER API KEY HERE!!!
const apiKey = "";

class App extends React.Component {
  state = {
    videos: [],
    thumbnail: "",
    title: "",
    description: "",
    date: null,
    link: "",
    iframe: ""
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
          videos: res.data.items
        })
      );
  };

  searchDate = data => {
    if (data !== "") {
      this.setState({ searchWord: data });
      this.apiCall(data);
    } else {
      console.log("Please enter something into the search bar");
    }
  };

  videoPlayer = data => {
    this.setState({ iframe: data });
  };

  render() {
    if (this.state.videos.length === 0) {
      return (
        <div className="overall">
          <div className="container">
            <h1>Alternate Tube</h1>
            <Search onSubmit={this.searchDate} />
          </div>
        </div>
      );
    }

    if (this.state.videos.length !== 0 && this.state.iframe === "") {
      return (
        <div className="overall">
          <div className="container-videos">
            <div className="search-bar__videos">
              <Search onSubmit={this.searchDate} />
            </div>
            <div className="video-listing">
              <VideoList videos={this.state.videos} />
            </div>
            <div />
          </div>
        </div>
      );
    }

    if (this.state.iframe !== "") {
      return (
        <div>
          <VideoList />
          <h1>hello</h1>
        </div>
      );
    }
  }
}

export default App;
