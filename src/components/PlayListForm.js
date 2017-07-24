import React, { Component } from "react";

export default class PlayListForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTrack: {
        userName: "",
        songArtist: "",
        songTitle: "",
        songNotes: ""
      }
    };
  }

  updateNewTrack = e => {
    console.log("e: ", e.target.value);

    let newTrack = this.state.newTrack;
    newTrack[e.target.name] = e.target.value;
    this.setState({ newTrack }, () => {
      console.log(this.state.newTrack);
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.newTrack);
    this.setState({
      newTrack: {
        userName: "",
        songArtist: "",
        songTitle: "",
        songNotes: ""
      }
    });
  };

  render() {
    return (
      <div className="PlayListForm">
        <form className="fieldForm">
          <label>Username: </label>
          <input
            className="formInputs"
            type="text"
            name="userName"
            onChange={this.updateNewTrack}
            value={this.state.newTrack.userName}
          />
          <label>Artist/Band: </label>
          <input
            className="formInputs"
            type="text"
            name="songArtist"
            onChange={this.updateNewTrack}
            value={this.state.newTrack.songArtist}
          />
          <label>Song Title: </label>
          <input
            className="formInputs"
            type="text"
            name="songTitle"
            onChange={this.updateNewTrack}
            value={this.state.newTrack.songTitle}
          />
          <label>Notes about Song: </label>
          <input
            className="formInputs"
            type="text"
            name="songNotes"
            onChange={this.updateNewTrack}
            value={this.state.newTrack.songNotes}
          />
          <input
            className="formInputs"
            type="button"
            value="Submit"
            onClick={this.onSubmit}
          />
        </form>
      </div>
    );
  }
}
