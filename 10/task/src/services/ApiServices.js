import axios from "axios";
import { userActions } from "../redux/action/userActions";
export const TodosServices = async (dispatch) => {
  try {
    let response = await axios.get('http://jsonplaceholder.typicode.com/todos')

    dispatch(userActions.setTodos(response.data))
  }
  catch { }

}


export const AlbumsServices = async (dispatch) => {
  try {
    let response = await axios.get('http://jsonplaceholder.typicode.com/albums')

    dispatch(userActions.setAlbums(response.data));
  }
  catch { }

}

export const CommentsServices = async (dispatch) => {
  try {
    let response = await axios.get('http://jsonplaceholder.typicode.com/comments')

    dispatch(userActions.setComments(response.data));
  }
  catch { }

}