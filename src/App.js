import React, { Component } from "react";
import "./styles/App.css";
import NavBar from "./components/NavBar.js";
import PlayList from "./components/PlayList.js";
import PlayListForm from "./components/PlayListForm.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <NavBar />
        </div>
        <div className="listAndForm">
          <PlayListForm />
          <PlayList />
        </div>
      </div>
    );
  }
}

export default App;
