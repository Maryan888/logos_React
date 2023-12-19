import { createSlice } from '@reduxjs/toolkit';
import { userActions } from "../action/userActions"
import { CommentsServices } from "../../services/ApiServices"

const initialState = {
  comments: []
}

const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    setComments: (state, action) => {
      state.comments = action.payload;
    },
  },
});

export const { setComments } = commentsSlice.actions;
export const getCommentsThunk = () => async (dispatch) => {
  try {
    let response = await axios.get('http://jsonplaceholder.typicode.com/comments');
    dispatch(setComments(response.data));
  } catch (error) {
    console.error('Error fetching comments:', error);
  }
};

export default commentsSlice.reducer;