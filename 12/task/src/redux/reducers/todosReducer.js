// import { userActionTypes } from "../action/userActions"
// import { TodosServices } from "../../services/ApiServices"

// export const getTodosThunk = () => (dispatch) => {
//   TodosServices(dispatch)
// }
// const initialState = {
//   todos:[]
// }
// const todosReducer = (state=initialState,action)=>{
//   switch(action.type){
//     case userActionTypes.SET_TODOS:
//     return{
//       ...state,
//       todos:action.payload
//     }
//     default:
//       return state
    
//   }
// }

// export default todosReducer

import { createSlice } from '@reduxjs/toolkit';
import { userActions } from "../action/userActions"
import { TodosServices } from "../../services/ApiServices"

const initialState = {
  todos: []
}

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    setTodos: (state, action) => {
      state.todos = action.payload;
    },
  },
});

export const { setTodos } = todosSlice.actions;
export const getTodosThunk = () => async (dispatch) => {
  try {
    let response = await axios.get('http://jsonplaceholder.typicode.com/todos');
    dispatch(setTodos(response.data));
  } catch (error) {
    console.error('Error fetching todos:', error);
  }
};

export default todosSlice.reducer;