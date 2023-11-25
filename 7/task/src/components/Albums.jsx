import React from "react";

class Albums extends React.Component {
  state = {
    albums: [],
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((response) => response.json())
      .then((albums) => this.setState({ albums }));
  }
  render() {
    return (
      <div>
        <h1>Albums</h1>
        <div>
          {this.state.albums.map((album) => (
            <p key={album.id}>{album.title}</p>
          ))}
        </div>
      </div>
    );
  }
}

export default Albums;
