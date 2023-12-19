import { createAsyncThunk } from '@reduxjs/toolkit';

export const getTodosAsync = createAsyncThunk('todos/getTodos', async () => {
  try {
    let response = await axios.get('http://jsonplaceholder.typicode.com/todos');
    return response.data;
  } catch (error) {
    console.error('Error fetching todos:', error);
    throw error;
  }
});




export const getAlbumsAsync = createAsyncThunk('albums/getAlbums', async () => {
  try {
    let response = await axios.get('http://jsonplaceholder.typicode.com/albums');
    return response.data;
  } catch (error) {
    console.error('Error fetching albums:', error);
    throw error;
  }
});



export const getCommentsAsync = createAsyncThunk('comments/getComments', async () => {
  try {
    let response = await axios.get('http://jsonplaceholder.typicode.com/comments');
    return response.data;
  } catch (error) {
    console.error('Error fetching comments:', error);
    throw error;
  }
});


