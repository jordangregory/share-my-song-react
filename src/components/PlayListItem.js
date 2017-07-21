import React, { Component } from "react";

export default class PlayListItems extends Component {
  render() {
    let songs = this.props.songs.map(e => {
      return (
        <div key={e._id}>
          <p>
            User Name {e.userName}
          </p>
          <p>
            Artist/Band:{e.songArtist}
          </p>
          <p>
            Song Title:{e.songTitle}
          </p>
          <p>
            Song Notes:{e.songNotes}
          </p>
        </div>
      );
    });
    return (
      <div>
        {songs}
      </div>
    );
  }
}
