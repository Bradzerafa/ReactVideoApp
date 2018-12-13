import React from "react";

let videoConfirm = false;

class VideoList extends React.Component {
  state = { iframeLink: "frame" };

  confirm = () => {
    videoConfirm = true;
    this.props.onClick(this.state.iframeLink);
  };

  render(props) {
    if (videoConfirm === false) {
      return (
        <div className="ui divided items video-card">
          <div className="item card-pos">
            <div className="image">
              <img src={this.props.video} alt="hello" />
            </div>
            <div className="content video-text">
              <a className="header" href="#" onClick={this.confirm}>
                {this.props.title}
              </a>
              <div className="description">
                <p>{this.props.description} </p>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (videoConfirm === true) {
      return (
        <iframe
          width="560"
          height="315"
          src={this.props.link}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      );
    }
  }
}
{
  /* <iframe
width="560"
height="315"
src={props.link}
frameBorder="0"
allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
allowFullScreen
/> */
}
export default VideoList;
