import { applyMiddleware, combineReducers, createStore } from 'redux'
import todosReducer from './reducers/todosReducer'
import commentsReducer from './reducers/commentsReducer'
import { composeWithDevTools } from '@redux-devtools/extension'
import albumsReducer from './reducers/albumsReducer'
import { thunk } from 'redux-thunk'

const rootReducer = combineReducers({
  todosReducer:todosReducer,
  commentsReducer:commentsReducer,
  albumsReducer: albumsReducer
})

const composeEnhancers = composeWithDevTools({
  trace:true,
  traceLimit:25
})

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))


export default store