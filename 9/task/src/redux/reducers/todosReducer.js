import { userActionTypes } from "../action/userActions"
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