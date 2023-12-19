
import { createSlice } from '@reduxjs/toolkit';
import { userActions } from "../action/userActions"
import { AlbumsServices } from "../../services/ApiServices"

const initialState = {
  albums: []
}

const albumsSlice = createSlice({
  name: 'albums',
  initialState,
  reducers: {
    setTodos: (state, action) => {
      state.albums = action.payload;
    },
  },
});

export const { setAlbums } = albumsSlice.actions;
export const getAlbumsThunk = () => async (dispatch) => {
  try {
    let response = await axios.get('http://jsonplaceholder.typicode.com/albums');
    dispatch(setAlbums(response.data));
  } catch (error) {
    console.error('Error fetching albums:', error);
  }
};

export default albumsSlice.reducer;