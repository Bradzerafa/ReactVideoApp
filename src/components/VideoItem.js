import React from "react";

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div>
      <div className="ui divided items ">
        <div className="item ">
          <div className="image">
            <img
              src={video.snippet.thumbnails.default.url}
              alt={video.snippet.title}
            />
          </div>
          <div className="content heading">
            <h4 href="#" onClick={() => onVideoSelect(video)}>
              {video.snippet.title}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
