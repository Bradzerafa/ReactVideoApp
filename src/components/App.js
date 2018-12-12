import React from "react";
import Search from "./Search";
import VideoList from "./VideoList";
import axios from "axios";
import "./App.css";

// ENTER API KEY HERE!!!
const apiKey = "";

class App extends React.Component {
  state = {
    video: "",
    title: "",
    description: "",
    date: null,
    link: ""
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
          video: res.data.items[0].snippet.thumbnails.default.url,
          title: res.data.items[0].snippet.title,
          description: res.data.items[0].snippet.description,
          date: res.data.items[0].snippet.publishedAt,
          link:
            "https://www.youtube.com/watch?v=" + res.data.items[0].id.videoId
        })
      );
  };

  searchDate = data => {
    this.setState({ searchWord: data });
    this.apiCall(data);
  };

  render() {
    if (this.state.video === "") {
      return (
        <div className="overall">
          <div className="container">
            <h1>Alternate Tube</h1>
            <Search onSubmit={this.searchDate} />
          </div>
        </div>
      );
    }

    if (this.state.video !== "") {
      return (
        <div className="overall">
          <div className="container">
            <Search onSubmit={this.searchDate} />
            <VideoList
              video={this.state.video}
              title={this.state.title}
              description={this.state.description}
              link={this.state.link}
            />
            <VideoList
              video={this.state.video}
              title={this.state.title}
              description={this.state.description}
              link={this.state.link}
            />
            <VideoList
              video={this.state.video}
              title={this.state.title}
              description={this.state.description}
              link={this.state.link}
            />
            <VideoList
              video={this.state.video}
              title={this.state.title}
              description={this.state.description}
              link={this.state.link}
            />
            <VideoList
              video={this.state.video}
              title={this.state.title}
              description={this.state.description}
              link={this.state.link}
            />
            <div />
          </div>
        </div>
      );
    }
  }
}

export default App;
