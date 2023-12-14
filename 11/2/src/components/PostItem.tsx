import { useState } from 'react';
import styles from "./PostItem.module.css"
interface PostItemProps {
  user: {
    id: number;
    title: string;
    body: string;
    
  };
}
const PostItem:React.FC<PostItemProps> = (props) => {
  let [body, setBody] = useState("");
  // let [status, setStatus] = useState('')

  const changeBodyHandler = () => {
    setBody(props.user.body);
  };

  return (
    <div>
      <div>
        <div className={styles.wrapPost}>
          <h2>{props.user.id}</h2>
          <h1>{props.user.title}</h1>
          <button onClick={changeBodyHandler}>Show Info</button>
        </div>
        <h3>{body}</h3>
      </div>
    </div>
  );
}

export default PostItem