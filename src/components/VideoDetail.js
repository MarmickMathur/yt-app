import React from "react";

const VideoDetail = ({ video }) => {
  if (video == null) return <div>loading</div>;
  const videoId = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div className="VideoDetail">
      <div className="ui embed">
        <iframe title="video player" src={videoId} />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
