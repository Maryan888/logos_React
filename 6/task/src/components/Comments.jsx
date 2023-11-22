// Comments.js
import React, { useEffect, useState } from "react";
import './Comments.css'
const Comments = () => {
  const [comments, setComments] = useState([]);
  const [selectedCommentId, setSelectedCommentId] = useState(null);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => response.json())
      .then((data) => setComments(data));
  }, []);

  const fetchPost = (postId) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((response) => response.json())
      .then((data) => {
        setSelectedPost(data);
      });
  };

  return (
    <div>
      <h2>Comments</h2>
      <ul>
        {comments.map((comment) => (
          <li className="comment"
            key={comment.id}
            onClick={() => {
              setSelectedCommentId(comment.id);
              fetchPost(comment.postId);
            }}
          >
            {comment.name}
            {selectedCommentId === comment.id && selectedPost && (
              <div>
                <strong>Selected Post:</strong> {selectedPost.title}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Comments;
