import { userActionTypes } from "../action/userActions"
import { TodosServices } from "../../services/ApiServices"

export const getTodosThunk = () => (dispatch) => {
  TodosServices(dispatch)
}
const initialState = {
  todos:[]
}
const todosReducer = (state=initialState,action)=>{
  switch(action.type){
    case userActionTypes.SET_TODOS:
    return{
      ...state,
      todos:action.payload
    }
    default:
      return state
    
  }
}

export default todosReducer