import {ADD_LIKE, GET_LIKES} from '../actions/types.js'

export default (state = [], action) => {
  switch (action.type) {
    case ADD_LIKE:
      // Find like index and cast it to boolean
      // 0 is considered false so we flip bits so it becomes -1 (equals to true)
      // -1 (not found) gets converted to 0 (equals to false)
      const exists = !!~Array.findIndex(state, like => action.payload.id === like.id);
      return exists ? state : [action.payload, ...state]
    case GET_LIKES:
      return action.payload
    default:
      return state
  }
}
