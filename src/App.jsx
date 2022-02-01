import "./App.css";
import ajax from "@fdaciuk/ajax";
import React, { Component } from "react";

import AppContent from "./components/AppContent";

class App extends Component {
  constructor() {
    super();
    this.state = {
      userInfo: null,
      repos: [],
      starred: [],
    };
  }

  handleSearch(e) {
    const value = e.target.value;
    const keyCode = e.which || e.keyCode;
    const ENTER = 13;
    if (keyCode === ENTER) {
      ajax()
        .get(`https://api.github.com/users/${value}`)
        .then((result) => {
          this.setState({
            userInfo: {
              username: result.name,
              photo: result.avatar_url,
              login: result.login,
              repos: result.public_repos,
              followers: result.followers,
              following: result.following,
            },
          });

          console.log(result);
        });
    }
  }

  getRepos(type) {
    return (e) => {
      ajax()
        .get(
          `https://api.github.com/users/${this.state.userInfo.login}/${type}`
        )
        .then((result) => {
          this.setState({
            [type]: result.map((repo) => ({
              name: repo.name,
              link: repo.html_url,
              id: repo.id,
            })),
          });
        });
    };
  }

  render() {
    return (
      <AppContent
        userInfo={this.state.userInfo}
        repos={this.state.repos}
        starred={this.state.starred}
        handleSearch={(e) => this.handleSearch(e)}
        getRepos={this.getRepos("repos")}
        getStarred={this.getRepos("starred")}
      />
    );
  }
}

export default App;
