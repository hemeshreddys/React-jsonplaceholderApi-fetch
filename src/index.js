import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      photos: [],
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
    this.getdata();
  }

  getdata = async () => {
    const url = await fetch("https://jsonplaceholder.typicode.com/posts");
    const urlPhotos = await fetch(
      "https://jsonplaceholder.typicode.com/photos"
    );
    const result = await url.json();
    const resultPhotos = await urlPhotos.json();

    this.setState({ items: result, isLoading: true, photos: resultPhotos });
  };

  render() {
    var { isLoading, items, photos } = this.state;
    if (!isLoading) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="App">
          <ul>
            {photos.map(photo => (
              <li key={photo.id}>
                <h1>{photo.title}</h1>
                <img alt={photo.id} src={photo.thumbnailUrl} />
              </li>
            ))}
          </ul>
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
