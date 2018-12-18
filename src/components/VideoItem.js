import React from "react";

let videoConfirm = false;

const VideoItem = ({ video, onVideoSelect }) => {
  if (videoConfirm === false) {
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
            <div className="content">
              <h4
                className="header"
                href="#"
                onClick={() => onVideoSelect(video)}
              >
                {video.snippet.title}
              </h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default VideoItem;
