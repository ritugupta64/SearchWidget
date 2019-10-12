import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
        searchVal: ""
    };
  }

  onHandleChange = e => {
    this.setState({
        searchVal: e.target.value
    });
  };

  onSearchBar = () => {
    this.props.searchText(this.state.searchVal)
  };

//   componentDidUpdate() {
//     if (this.props.searchText.length > 0) {
//       setInterval(() => {
//         this.props.searchText(this.state.searchVal)
//       }, 30000);
//     }
//   }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.searchVal}
          name="searchItem"
          onChange={this.onHandleChange}
        />

        <button type="button" onClick={this.onSearchBar}>
          Search
        </button>
      </div>
    );
  }
}

export default SearchBar;
