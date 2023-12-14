import { users } from './assets/users'
import { capsuls } from './assets/capsuls'
import styles from './PostComponents.module.css'
import PostItem from './PostItem'
import CapsulItem from './CapsulItem'
interface PostComponentProps {
  users: (typeof users);
  capsuls: (typeof capsuls);
  
}
const PostComponent: React.FC<PostComponentProps> = ({ users, capsuls }) => {
  return (
    <div className={styles.wrapContainers}>
      <div className={styles.container}>
        <h1>Users</h1>
        {users.map((user) => (
          <PostItem key={user.id} user={user} />
        ))}
      </div>
      <div className={styles.container}>
        <h1>Capsules</h1>
        {capsuls.map((capsul) => (
          <CapsulItem key={Math.random()} capsul={capsul} />
        ))}
      </div>
    </div>
  );
};
export default PostComponent