import React from "react";

const VideoDetail = ({ video }) => {
  if (video === null) {
    return <div></div>;
  }
  const VIDEO_SOURCE = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div>
      <div className="ui embed">
        <iframe title="video player" src={VIDEO_SOURCE}></iframe>
      </div>
      <div className="ui segment">
        <h4 className="ui header">
          {video ? video.snippet.title : "loading..."}
        </h4>
        <p>{video ? video.snippet.description : null}</p>
      </div>
    </div>
  );
};
export default VideoDetail;
