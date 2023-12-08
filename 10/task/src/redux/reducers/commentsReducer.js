import { userActionTypes } from "../action/userActions"
import { CommentsServices } from "../../services/ApiServices"

export const getCommentsThunk = () => (dispatch) => {
  CommentsServices(dispatch)
}
const initialState = {
  comments: []
}

const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case userActionTypes.SET_COMMENTS:
      return {
        ...state,
        comments: action.payload
      }
    default:
      return state

  }
}

export default commentsReducer