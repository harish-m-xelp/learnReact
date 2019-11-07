import React from "react";
import "./App.css";
import Newscard from "../src/components/newsCard";

import Load from "../src/components/loader";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newsData: "",
      error: "",
      loader: true
    };
  }

  componentWillMount() {
    this.fetchData();
  }

  fetchData() {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=5e854054b73f484eb3e3a9e836088064`
    )
      .then(data => data.json())
      .then(data =>
        this.setState({
          newsData: data,
          loader: false
        })
      )
      .catch(e => this.setState({ error: e }));
  }

  render() {
    return (
      <div className="App">
        {!this.state.loader ? (
          <div>
            <h1>Todays's Hot News!!!</h1>
            <Newscard newsFeed={this.state.newsData} />
          </div>
        ) : (
          <Load />
        )}
      </div>
    );
  }
}
export default App;
