import { userActionTypes } from "../action/userActions"

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