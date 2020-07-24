import React, { Component } from "react";
//import PropTypes from "prop-types";
import styles from "./player.module.css";

class Player extends Component {
  state = {
    muted: true
  };

  changeMuted = () => {
    this.setState({ muted: false, display: "none" });
  };

  render() {
    return (
      <div className={styles.main_player}>
        <div className={styles.main_player_wrapper}>
          <div
            className={styles.main_player_volume}
            onClick={this.changeMuted}
            style={{ display: `${this.state.display}` }}
          >
            <i className={styles.main_player_volume_i}></i>
            <p>Включить звук</p>
          </div>
          <video
            className={styles.main_player_video}
            onContextMenu="false"
            autoPlay
            controls
            muted={this.state.muted}
          >
            <source
              src="https://obsachfebeadelo.ru/video/i.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    );
  }
}

//Player.propTypes = {};

export default Player;
