import React, { Component } from "react";

export default class PlayListForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTrack: {}
    };
  }

  render() {
    return (
      <div className="PlayListForm">
        <form className="fieldForm">
          <label>Username: </label>
          <input type="text" name="userName" onKeyUp={this.updateNewTrack} />
          <label>Artist/Band: </label>
          <input type="text" name="songArtist" onKeyUp={this.updateNewTrack} />
          <label>Song Title: </label>
          <input type="text" name="singTitle" onKeyUp={this.updateNewTrack} />
          <label>Notes about Song: </label>
          <input type="text" name="songNotes" onKeyUp={this.updateNewTrack} />
        </form>
        <input type="button" value="Submit" onClick={this.addToList} />
      </div>
    );
  }

  updateNewTrack = e => {
    let newTrack = this.state.newTrack;
    newTrack[e.target.name] = e.target.value;
    this.setState({ newTrack });
  };

  addToList = e => {
    e.preventDefault();

    fetch("https://tiny-lasagna-server.herokuapp.com/collections/playlisting", {
      method: "POST",
      body: this.state.newTrack,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        console.log(response, "booh yah!");
      })
      .catch(err => {
        console.log(err, "boo, you suck!");
      });
    this.setState({
      userName: "",
      songNotes: "",
      songArtist: "",
      songTitle: ""
    });
  };
}
