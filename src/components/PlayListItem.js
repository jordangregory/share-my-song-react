import React, { Component } from "react";

export default class PlayListItems extends Component {
  render() {
    let { userName, songArtist, songTitle, songNotes } = this.props.item;

    return (
      <div className="dataContainer">
        <div className="returnedData">
          <div className="itemFields">
            <div>
              User Name: {userName}
            </div>
            <div>
              Artist/Band:{songArtist}
            </div>
            <div>
              Song Title:{songTitle}
            </div>
            <div>
              Song Notes:{songNotes}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
