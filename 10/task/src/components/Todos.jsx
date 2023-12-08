import { useEffect } from "react";
// import { TodosServices } from "../services/ApiServices";
import { useSelector, useDispatch } from "react-redux";
import { userActions } from "../redux/action/userActions";
import { getTodosThunk} from "../redux/reducers/todosReducer";

const Todos = () => {
  // const [todos, setTodos] = useState([]);
  const todos = useSelector((store) => store.todosReducer.todos);
  const store = useSelector((store) => store);
  console.log(store);
  const dispatch = useDispatch();
  const getTodos = () => dispatch(getTodosThunk());
  useEffect(() => {
    console.log("render");
    getTodos();
  }, []);
  userActions.setTodos();

  return (
    <div className="wrapperForm">
      {todos.map((todo) => {
        return todo.id;
      })}
      
    </div>
  );
};

export default Todos;
