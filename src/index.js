import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoDetail from './components/video_detail';
import VideoList from './components/video_list';
import './style.css';
import _ from 'lodash';
import YTSearch from 'youtube-api-search';
const API_KEY = 'AIzaSyASOC9t4nWJFlSryca44QUtrxa7KZ48_JQ';

class App extends Component {
    constructor(props) {
        super(props);
        this.state= {
            videos: [],
            selectedvideo: null
        };

        this.videoSearch('Beşiktaş')
    }

    videoSearch (term) {
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
            console.log(this.state.videos);
        })
    }
    

    render() {
        const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);
        return (
            <div className="main-container container"> 
                <SearchBar onSearchTermChange= {videoSearch}/>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList
                    videos= {this.state.videos} 
                    onVideoSelect={(selectedVideo) => {this.setState({selectedVideo: selectedVideo})}} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));