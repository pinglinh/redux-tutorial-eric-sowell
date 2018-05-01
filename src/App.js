import React, { Component } from "react";
import store from "./store";
import RepoSearch from "./components/RepoSearch";

class App extends Component {
  render() {
    return (
      <div className="App">
        <RepoSearch store={store} />
      </div>
    );
  }
}

export default App;
