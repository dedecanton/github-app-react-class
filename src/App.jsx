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
      isFetching: false
    };
  }

  handleSearch(e) {
    const value = e.target.value;
    const keyCode = e.which || e.keyCode;
    const ENTER = 13;

    if (keyCode === ENTER) {
      
      if(value.trim().length <= 0){
        return
      }

      this.setState({
        isFetching: true
      })
      
      ajax()
        .get(this.getGithubApiUrl(value))
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
            repos: [],
            starred: [],
          });
        })
        .always(() => {
          this.setState({isFetching: false})
        })
    }
  }

  getGithubApiUrl(username, type) {
    const internaUsername = username ? `/${username}` : "";
    const internalType = type ? `/${type}` : "";
    return `https://api.github.com/users${internaUsername}${internalType}`;
  }

  getRepos(type) {
    return (e) => {
      const username = this.state.userInfo.login;
      ajax()
        .get(this.getGithubApiUrl(username, type))
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
        {...this.state}
        handleSearch={(e) => this.handleSearch(e)}
        getRepos={this.getRepos("repos")}
        getStarred={this.getRepos("starred")}
      />
    );
  }
}

export default App;
