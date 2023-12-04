import { userActionTypes } from "../action/userActions"
const initialState = {
  albums: []
}
const albumsReducer = (state = initialState, action) => {
  switch (action.type) {
    case userActionTypes.SET_ALBUMS:
      return {
        ...state,
        albums: action.payload
      }
    default:
      return state

  }
}

export default albumsReducer