import React, { Component } from "react";

export default class PlayListForm extends Component {
  render() {
    return (
      <div className="PlayListForm">
        <form className="fieldForm">
          <label>Username: </label>
          <input type="text" />
          <label>Artist/Band: </label>
          <input type="text" />
          <label>Song Title: </label>
          <input type="text" />
          <label>Notes about Song: </label>
          <input type="text" />
          <input type="button" value="Submit" onClick={this.addToList} />
        </form>
      </div>
    );
  }

  addToList = e => {
    e.preventDefault();
    this.setState({
      userName: e.target.value,
      songTitle: e.target.value,
      songArtist: e.target.value,
      songNotes: e.target.value
    });
    let listItem = JSON.stringify(this.state);

    fetch("https://tiny-lasagna-server.herokuapp.com/collections/playlisting", {
      method: "POST",
      body: listItem,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        console.log(response, "yay");
      })
      .catch(err => {
        console.log(err, "boo!");
      });
    this.setState({
      userName: "",
      songNotes: "",
      songArtist: "",
      songTitle: ""
    });
  };
}
