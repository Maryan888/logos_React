import React from "react";

class Comments extends React.Component {
  state = {
    comments: [],
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => response.json())
      .then((comments) => this.setState({ comments }));
  }
  render() {
    return (
      <div>
        <h1>Comments</h1>
        <div>
          {this.state.comments.map((comment) => (
            <p key={comment.id}>{comment.body}</p>
          ))}
        </div>
      </div>
    );
  }
}

export default Comments;
