import React, { Component } from "react";
import GithubUserForm from "./components/GithubUserForm";
import ReposList from "./components/ReposList";

class App extends Component {
  render() {
    return (
      <div>
        <GithubUserForm />
        <ReposList />
      </div>
    );
  }
}

export default App;
