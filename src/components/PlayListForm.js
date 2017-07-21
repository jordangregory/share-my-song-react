import React, { Component } from "react";

export default class PlayListForm extends Component {
  render() {
    return (
      <div className="PlayListForm">
        <form>
          <label>Username: </label>
          <input type="text" />
          <label>Artist/Band: </label>
          <input type="text" />
          <label>Song Title: </label>
          <input type="text" />
          <label>Notes about Song: </label>
          <input type="text" />
          <input type="button" value="Submit" />
        </form>
      </div>
    );
  }
}
