export const userActionTypes = {
  SET_TODOS: "SET_TODOS",
  SET_COMMENTS: "SET_COMMENTS",
  SET_ALBUMS: "SET_ALBUMS",
}


export const userActions = {
  setTodos: (todos) => ({
    type: userActionTypes.SET_TODOS,
    payload: todos
  }),
  setComments: (comments) => ({
    type: userActionTypes.SET_COMMENTS,
    payload: comments
  }),
  setAlbums: (albums) => ({
    type: userActionTypes.SET_ALBUMS,
    payload: albums
  })
}