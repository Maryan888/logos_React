import { useEffect, useState } from "react";
// import { CommentsServices } from "../services/ApiServices";
import { useSelector, useDispatch } from "react-redux";
import { userActions } from "../redux/action/userActions";
import { getCommentsThunk } from "../redux/reducers/commentsReducer";
// import "./App.css";
const Comments = () => {
  const [selectedPost, setSelectedPost] = useState(null);
    const [selectedCommentId, setSelectedCommentId] = useState(null);
  const comments = useSelector((store) => store.commentsReducer.comments);
  const store = useSelector((store) => store);
  console.log(store);
  const dispatch = useDispatch();
  const getComments = () => dispatch(getCommentsThunk());
  useEffect(() => {
    console.log("render");
    getComments()
  }, []);
  userActions.setComments();

  const fetchPost = (postId) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((response) => response.json())
      .then((data) => {
        setSelectedPost(data);
      });
  };

  return (
    <div className="wrapperForm">
      <h2>Comments</h2>
      <ul>
        {comments.map((comment) => (
          <li
            className="comment"
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
