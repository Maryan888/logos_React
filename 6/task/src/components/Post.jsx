import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Post = () => {
  const [post, setPost] = useState(null);
  const { postId } = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((response) => response.json())
      .then((data) => setPost(data));
  }, [postId]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    
    <div>
      <h2>Post</h2>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  );
};

export default Post;
