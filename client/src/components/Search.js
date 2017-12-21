import React, { Component } from 'react'

import Query from "./Search/Query";
import Results from "./Search/Results";

import helpers from "../utils/helpers";

class Search extends Component {

  state = { 
    results: []
  }

 setQuery = (newQuery, newStart, newEnd) => {
    helpers.runQuery(newQuery, newStart, newEnd)
    .then((data) => {
      this.setState({ results: { docs: data.docs } });
    });
  }

  render() {
    return (
      <div className="main-container">

        {}
        <Query updateSearch={this.setQuery} />
        {}
        <Results results={this.state.results} />
      </div>
    );
  }
};

export default Search;