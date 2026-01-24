import React, { Component } from "react";
import "./Splash.css";
import { Redirect } from "react-router-dom";
import splash1 from "../../assets/images/splashh.mp4";  // ✅ correct relative path

function VideoSplash(props) {
  return (
    <div className="logo_wrapper">
      <div className="screen" style={{ backgroundColor: props.theme.splashBg }}>
        <video
          className="splash-video"
          src={splash1}   // ✅ FIXED
          autoPlay
          muted
          playsInline
        />
      </div>
    </div>
  );
}

class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
    };
  }

  componentDidMount() {
    this.id = setTimeout(() => this.setState({ redirect: true }), 3500);
  }

  componentWillUnmount() {
    clearTimeout(this.id);
  }

  render() {
    return this.state.redirect ? (
      <Redirect to="/home" />
    ) : (
      <VideoSplash theme={this.props.theme} />
    );
  }
}

export default Splash;
