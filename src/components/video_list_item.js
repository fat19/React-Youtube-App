import React from 'react';
const VideoListItem = ({video, onVideoSelect}) => {
    return (    
        <li className="list-group-item" onClick={() => {onVideoSelect(video)}}>
            <div className="row">
                <div className="videoThumb col-xs-5"> <img src={video.snippet.thumbnails.default.url} /> </div>
                <div className="videoTitle col-xs-7"> {video.snippet.title} </div>
            </div>
        </li>
    )
}

export default VideoListItem;