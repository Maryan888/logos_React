import React from "react";

class Posts extends React.Component {
  state = {
    posts: [],
  };

  componentDidMount(){
       fetch("https://jsonplaceholder.typicode.com/posts")
         .then((response) => response.json())
         .then((posts) => this.setState({ posts }));
         
  }
  render(){
    return(
      <div>
        <h1>Posts</h1>
        <div>
          {this.state.posts.map(post=>(
            <p key={post.id}>{post.title}</p>
          ))}
        </div>
      </div>
    )
  }
}

export default Posts


