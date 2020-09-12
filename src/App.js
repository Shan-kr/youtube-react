import React from "react";
import "./styles/styles.css";
import Searchbar from "./SearchBar";
//import YouTube from "react-youtube";
import VideoList from "./videolist";
import VideoDetail from "./VideoDetail";
import Logo from "./images/youtube1.jpg";

class App extends React.Component {
  state = { videos: [], loading: true, selectedVideo: null };
  handleSubmit = async (termFromSearchBar) => {
    var that = this;
    var API_key = "YOUTUBE API KEY";
    var maxResults = 7;
    var url =
      "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=" +
      maxResults +
      "&q=" +
      termFromSearchBar +
      "&key=" +
      API_key;

    fetch(url)
      .then(function (response) {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json();
      })
      .then(function (res) {
        console.log(res);
        that.setState({ videos: res.items, loading: false });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  handleVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };
  render() {
    return (
      <div className="App">
        <nav className="navbar custom-nav sticky-top navbar-expand-md">
          <img src={Logo} alt="" />
        </nav>
        <Searchbar handleFormSubmit={this.handleSubmit} />

        <div className="container">
          <div className="row">
            <div className="col-12 col-md-8">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="col-12 col-md-4">
              <VideoList
                handleVideoSelect={this.handleVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
        <div class="containner-fluid fott pannel-footer pannel-custom">
          <p class="text-light text-center pj">
            COPYRIGHT<i class="fa fa-copyright" aria-hidden="true"></i>2020
            REACT-YOUTUBE BY SHAN &nbsp; -ALL RIGHT RESERVED.
          </p>
          <p class="text-light text-center pj">POWERED BY:-Shantanu Kumar</p>
          <p class="text-light text-center pj">VERSION 1.0.1</p>
        </div>
      </div>
    );
  }
}
export default App;
