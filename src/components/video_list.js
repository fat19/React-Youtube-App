import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
    const videoItem = props.videos.map((video) => {
        return (
            <VideoListItem 
                onVideoSelect = {props.onVideoSelect}
                video= {video}
                key= {video.etag}
            />
        )
    })
    return (
        <div className="video-list col-md-4 list-group">
            <ul> 
                {videoItem}
            </ul>
        </div>
    )
}


export default VideoList;