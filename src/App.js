import React from "react";
import youtubeAPI from "./API/youtubeAPI";
import "./App.css";
import SearchBar from "./components/SearchBar";
import VideoDetail from "./components/VideoDetail";
import VideoList from "./components/VideoList";

const API_KEY = "YOUR_KEY";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.requestToYoutubeApi("buildings");
  }
  requestToYoutubeApi = async (searchterm) => {
    const response = await youtubeAPI.get("/search", {
      params: {
        q: searchterm,
        part: "snippet",
        maxResults: 5,
        type: "video",
        key: API_KEY,
      },
    });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  selectVideo = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar searchvideorequest={this.requestToYoutubeApi} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo}></VideoDetail>
            </div>
            <div className="five wide column">
              <VideoList
                videos={this.state.videos}
                onselectvideo={this.selectVideo}
              ></VideoList>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
