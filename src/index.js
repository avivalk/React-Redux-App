
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyC3oDC8DnCPxW6Qxbbi-vlxG1702Z0CV_g'

// Create a new component. This component should produce some HTML
class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      // when key and property are same name this is cleaner syntax
      // it's equivalent to this.setState( { videos:videos });
      this.setState({
        videos:videos,
        selectedVideo: videos[0]
      });
    });
  }


  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={ this.state.selectedVideo }  />
        <VideoList
         onVideoSelect={ selectedVideo => this.setState({selectedVideo}) }
         videos={ this.state.videos } />
      </div>
    );
  }
}

//Take this component's generated HTML and put it on the page(in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));
