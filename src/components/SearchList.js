import React, { Component } from "react";
// import {date} from './utilities/utilities'

class SearchList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.date = this.date.bind(this);
  }

  date(dateTimeStamp) {
    let date = new Date(dateTimeStamp);
    let timeMilliSeconds = date.getTime();
    const milliseconds = timeMilliSeconds;

    const hours = `0${new Date(milliseconds).getHours() - 1}`.slice(-2);
    const minutes = `0${new Date(milliseconds).getMinutes()}`.slice(-2);
    const seconds = `0${new Date(milliseconds).getSeconds()}`.slice(-2);

    const time = `${hours}:${minutes}:${seconds}`;
    return time;
  }

  componentDidMount() {
    // this.interval = setInterval(() => this.fetchSearchItem(), 3000);
    console.log("B");
  }

  render() {
    const items = this.props.searchListItems.map((item, i) => {
      
      return (

        <div key={i} style={{padding: '20px', marginBottom: '10px', borderBottom: '1px solid red'}} className={this.props.passGridEvent ? "Grid itemsContainer" : "list itemsContainer"}>
          {item.title}

          <br />

          <span style={{ color: "red" }}>
            {this.date(item.publishedAt)} <br />
          </span>
        </div>
      );
    });
    return (
      <div className = "searchContainer">
        search List
        <div onClick = {() => this.props.passOrder('publishedAt')}>sorting</div>
        {items}
        <button onClick = {(e)=>this.props.loadMore()}>Load</button>
      </div>
    );
  }
}

export default SearchList;
