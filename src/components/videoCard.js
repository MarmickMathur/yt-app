import React from "react";
import "./videoCard.css";

const VideoCard = ({ video, onVideoSelect }) => {
  //   console.log(video);
  return (
    <div className="item VideoCard" onClick={() => onVideoSelect(video)}>
      <img
        alt={video.snippet.title}
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
      ></img>
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoCard;
