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
    fetch("https://jsonplaceholder.typicode.com/users")
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
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        </div>
      );
    }
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
