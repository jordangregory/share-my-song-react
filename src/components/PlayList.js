import React, { Component } from "react";
import PlayListItem from "./PlayListItem";

export default class PlayList extends Component {
  render() {
    let songs = this.props.songs.map((song, index) => {
      return <PlayListItem key={index} item={song} />;
    });

    return (
      <div className="updatedListContainer">
        <div>
          <input
            type="button"
            value="Update List"
            onClick={this.props.fetchData}
          />
        </div>
        <div className="songsHolder">
          {songs}
        </div>
      </div>
    );
  }
}
