
import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './reducers/todosReducer'
import commentsReducer from './reducers/commentsReducer'
import albumsReducer from './reducers/albumsReducer'





const store = configureStore({
  reducer: {
    todosReducer, 
    commentsReducer,
    albumsReducer,
  },
});

export default store;