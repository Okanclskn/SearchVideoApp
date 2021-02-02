import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onselectvideo }) => {
  return (
    <div className="ui relaxed divided list">
      {videos.map((video) => {
        return (
          <VideoItem
            key={video.id.videoId}
            video={video}
            onselectvideo={onselectvideo}
          ></VideoItem>
        );
      })}
    </div>
  );
};
export default VideoList;
