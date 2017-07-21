import React, { Component } from "react";

export default class PlayListItems extends Component {
  render() {
    let songs = this.props.songs.map(e => {
      return (
        <div className="returnedData" key={e._id}>
          <div className="dataContainer">
            <div>
              <p>
                User Name: {e.userName}
              </p>
            </div>
            <div>
              <p>
                Artist/Band:{e.songArtist}
              </p>
            </div>
            <div>
              <p>
                Song Title:{e.songTitle}
              </p>
            </div>
            <div>
              <p>
                Song Notes:{e.songNotes}
              </p>
            </div>
          </div>
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
