import React from "react";

const VideoItem = ({ video, onselectvideo }) => {
  const imgUrl = video.snippet.thumbnails.medium.url;
  return (
    <div className="video-item item" onClick={() => onselectvideo(video)}>
      <img src={imgUrl} alt={video.snippet.title} className="ui image"></img>
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
