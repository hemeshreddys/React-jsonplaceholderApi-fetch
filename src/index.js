import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoading: false
    };
  }
  componentDidMount() {
    //https://jsonplaceholder.typicode.com/photos
    //https://jsonplaceholder.typicode.com/posts
    //https://jsonplaceholder.typicode.com/comments
    //https://jsonplaceholder.typicode.com/users
    //https://jsonplaceholder.typicode.com/todos
    //https://jsonplaceholder.typicode.com/albums
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(json => {
        this.setState({
          items: json,
          isLoading: true
        });
      });
  }
  render() {
    var { isLoading, items } = this.state;
    if (!isLoading) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="App">
          <ul>
            {items.map(item => (
              <li key={item.id}>
                <h1>{item.title}</h1>
                <p>{item.body}</p>
              </li>
            ))}
          </ul>
        </div>
      );
    }
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
