import React, { Component } from "react";
import "./styles/App.css";
import NavBar from "./components/NavBar.js";
import PlayList from "./components/PlayList.js";
import PlayListForm from "./components/PlayListForm.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { songs: [] };
  }
  componentDidMount() {
    fetch("https://tiny-lasagna-server.herokuapp.com/collections/playlisting")
      .then(results => {
        return results.json();
      })
      .then(data => {
        this.setState({ songs: data });
        console.log("state", this.state.songs);
      });
  }

  handleFetchData = e => {
    e.preventDefault();
    fetch("https://tiny-lasagna-server.herokuapp.com/collections/playlisting")
      .then(results => {
        console.log(results);
        return results.json();
      })
      .then(data => {
        this.setState({ songs: data });
        console.log("state", this.state.songs);
      });
  };

  handleAddToList = newTrack => {
    fetch("https://tiny-lasagna-server.herokuapp.com/collections/playlisting", {
      method: "POST",
      body: newTrack,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        console.log(response, "booh yah!");
      })
      .catch(err => {
        console.log(err, "booh, yah suck!");
      });
  };

  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="listAndForm">
          <PlayListForm onSubmit={this.handleAddToList} />
          <PlayList songs={this.state.songs} fetchData={this.handleFetchData} />
        </div>
      </div>
    );
  }
}

export default App;
