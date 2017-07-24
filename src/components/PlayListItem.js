import React, { Component } from "react";

export default class PlayListItems extends Component {
  render() {
    let songs = this.props.songs.map(e => {
      return (
        <div className="dataContainer">
          <div className="returnedData" key={e._id}>
            <div className="itemFields">
              <div>
                User Name: {e.userName}
              </div>
              <div>
                Artist/Band:{e.songArtist}
              </div>
              <div>
                Song Title:{e.songTitle}
              </div>
              <div>
                Song Notes:{e.songNotes}
              </div>
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
