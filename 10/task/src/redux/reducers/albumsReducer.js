import { userActionTypes } from "../action/userActions"
// import { AlbumsServices } from "../services/ApiServices";
import { AlbumsServices } from "../../services/ApiServices"
export const getAlbumsThunk = ()=>(dispatch)=>{
  AlbumsServices(dispatch)
}
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