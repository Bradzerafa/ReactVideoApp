import React from "react";

// ADD PROPS TO TO THIS FILE

const VideoList = props => {
  return (
    <div className="ui divided items video-card">
      <div className="item card-pos">
        <div className="image">
          <img src={props.video} alt="hello" />
        </div>
        <div className="content video-text">
          <a className="header" href={props.link}>
            {props.title}
          </a>
          <div className="description">
            <p>{props.description} </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoList;
