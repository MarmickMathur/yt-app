import React from "react";
import VideoCard from "./videoCard";

const VideosList = ({ videos, onVideoSelect }) => {
  const vidlist = videos.map((video) => {
    // console.log(video);
    return (
      <VideoCard
        onVideoSelect={onVideoSelect}
        key={video.id.videoId}
        video={video}
      />
    );
  });
  return <div className="ui divided list relaxed">{vidlist}</div>;
};
export default VideosList;
