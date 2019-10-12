import React, { Component } from "react";
import SearchBar from "./components/SearchBar";
import axios from "axios";
import SearchList from "./components/SearchList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchItem: [],
      gridView: true,
      listView: false,
      direction: {
        publishedAt: "asc"
      },
      per: 10,
      page: 1,
      totalResults: null
    };

    this.scrollItem = React.createRef();
  }

  onHandleGridView = () => {
    console.log("grid");
    this.setState({
      gridView: true,
      listView: false
    });
  };

  onHandleListView = () => {
    console.log("list");
    this.setState({
      gridView: false,
      listView: true
    });
  };

  fetchSearchItem = async item => {
    const { per, page } = this.state;
    const response = await axios.get(
      `https://newsapi.org/v2/everything?q=${item}&apiKey=363d26dd3d664d199ca63adc371e22aa&pageSize=${per}&page=${page}&sortBy=publishedAt`
    );

    var newData = this.state.searchItem.concat(response.data.articles);
    this.setState({
      searchItem: newData,
      scrolling: false
      // totalResults: response.data.totalResults
    });
    console.log(response);
    // console.log(this.state.totalResults)
  };

  // componentDidMount() {
  //   // this.interval = setInterval(() => this.fetchSearchItem(), 3000);
  //   console.log("A");
  // }

  //   componentDidUpdate() {
  //     if (this.state.searchItem.length > 0) {
  //       setInterval(() => {
  //         this.fetchSearchItem();
  //       }, 30000);
  //     }
  //   }

  //   componentWillUnmount() {
  //     clearInterval(this.interval);
  //   }

  onHandleOrder = key => {
    this.setState({
      searchItem: this.state.searchItem.sort((a, b) =>
        this.state.direction[key] === "asc"
          ? Date.parse("01/01/2013 " + a)[key] >
            Date.parse("01/01/2013 " + b)[key]
          : Date.parse("01/01/2013 " + b)[key] <
            Date.parse("01/01/2013 " + a)[key]
      )
    });

    console.log("order");
  };

  loadMore = () => {
    this.setState(
      prevState => ({
        page: prevState.page + 1,
        scrolling: true
      }),

      this.fetchSearchItem
    );
  };



  // handleScroll = () => { 
  //  // console.log('test')
  //   var lastLi = document.querySelector(".searchContainer > itemsContainer:last-child");
  //   var lastLiOffset = lastLi.offsetTop + lastLi.clientHeight;
  //   var pageOffset = window.pageYOffset + window.innerHeight;
  // if (pageOffset > lastLiOffset) {
  //        this.loadMore();
  //   }
  // };

  // componentDidMount(){
   
  //   this.scrollItem.current.addEventListener("scroll", this.handleScroll)
  // }

  

  render() {
    return (
      <div>
        App
        <span
          style={{ padding: "20px", display: "inline-block", color: "red" }}
          onClick={this.onHandleGridView}
        >
          Grid
        </span>
        <span
          style={{ padding: "20px", display: "inline-block", color: "green" }}
          onClick={this.onHandleListView}
        >
          List
        </span>
        
        <SearchBar searchText={this.fetchSearchItem} />
       
        
        <SearchList
          searchListItems={this.state.searchItem}
          passGridEvent={this.state.gridView}
          passListEvent={this.state.listView}
          passOrder={this.onHandleOrder}
          loadMore={this.loadMore}
        />
       
      </div>
    );
  }
}

export default App;
