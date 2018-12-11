import React from "react";
import Search from "./Search";
import axios from "axios";

// ENTER API KEY HERE!!!
const apiKey = "";

class App extends React.Component {
  state = { searchWord: "", video: "" };

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
        this.setState({ video: res.data.items[0].snippet.thumbnails.high.url })
      );
  };

  searchDate = data => {
    this.setState({ searchWord: data });
    this.apiCall(data);
  };

  render() {
    return (
      <div>
        <Search onSubmit={this.searchDate} />
        <img src={this.state.video} alt="Thumbnail" />
      </div>
    );
  }
}

export default App;
