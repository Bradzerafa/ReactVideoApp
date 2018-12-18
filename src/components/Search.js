import React from "react";

class Search extends React.Component {
  state = { searchTerm: "" };

  input = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.searchTerm);
  };

  render() {
    return (
      <form
        className=" ui input massive focus search-input fluid "
        onSubmit={this.input}
      >
        <input
          type="text"
          placeholder="Search videos"
          onChange={e => this.setState({ searchTerm: e.target.value })}
        />
      </form>
    );
  }
}

export default Search;
