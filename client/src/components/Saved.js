
import React, { Component } from 'react'

import helpers from "../utils/helpers";

class Saved extends Component {
  state = {
    savedArticles: []
  }

  componentDidMount() {
    helpers.getSaved()
    .then((articleData) => {
      this.setState({ savedArticles: articleData.data });
      console.log("saved results", articleData.data);
    });
  }

  handleClick = (item) => {
    
    helpers.deleteSaved(item.title, item.date, item.url)
    .then(() => {

      helpers.getSaved()
      .then((articleData) => {
        this.setState({ savedArticles: articleData.data });
        console.log("saved results", articleData.data);
      });

    });
  }

  renderEmpty = () => {
    return (
      <li className="list-group-item">
        <h3>
          <span>
            <em>Save your first article...</em>
          </span>
        </h3>
      </li>
    );
  }

  renderArticles = () => {
    return this.state.savedArticles.map((article, index) => {

      return (
        <div key={index}>
          <li className="list-group-item">
            <h3>
              <span>
                <em>{article.title}</em>
              </span>
              <span className="btn-group pull-right">
                <a href={article.url} rel="noopener noreferrer" target="_blank">
                  <button className="btn btn-default ">View Article</button>
                </a>
                <button className="btn btn-primary" onClick={() => this.handleClick(article)}>Delete</button>
              </span>
            </h3>
            <p>Date Published: {article.date}</p>
          </li>
        </div>
      );
    });
  }

  renderContainer = () => {
    return (
      <div className="main-container">
        <div className="row">
          <div className="col-lg-12">
            <div className="panel panel-primary">
              <div className="panel-heading">
                <h1 className="panel-title">
                  <strong>
                    <i className="fa fa-download" aria-hidden="true"></i> Saved Articles</strong>
                </h1>
              </div>
              <div className="panel-body">
                <ul className="list-group">
                  {this.renderArticles()}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {

    if (!this.state.savedArticles) {
      return this.renderEmpty();
    }

    return this.renderContainer();
  }
};


export default Saved;
