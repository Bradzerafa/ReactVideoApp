import React from "react";

const VideoItem = ({ video }) => {
  return (
    <div>
      <div className="ui divided items video-card">
        <div className="item card-pos">
          <div className="image">
            <img src={video.snippet.thumbnails.default.url} alt="hello" />
          </div>
          <div className="content video-text">
            <a className="header" href="#">
              {video.snippet.title}
            </a>
            <div className="description">
              <p>{video.snippet.description} </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
