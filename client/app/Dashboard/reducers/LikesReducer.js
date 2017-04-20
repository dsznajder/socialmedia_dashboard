import {ADD_LIKE, REMOVE_LIKE, GET_LIKES} from '../actions/types.js'

export default (state = [], action) => {
  switch (action.type) {
    case ADD_LIKE:
      return [action.payload, ...state]
    case REMOVE_LIKE:
      const index = Array.findIndex(state, like => like.id === action.payload.id);
      return [
        ...state.slice(0, index),
        ...state.slice(index + 1)
      ];
    case GET_LIKES:
      return action.payload
    default:
      return state
  }
}
