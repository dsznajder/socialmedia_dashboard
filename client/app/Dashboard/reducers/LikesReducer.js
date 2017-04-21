import {ADD_LIKE, REMOVE_LIKE, GET_LIKES} from '../actions/types.js'

export default (state = [], action) => {
  switch (action.type) {
    case ADD_LIKE:
      return [action.payload, ...state]

    case REMOVE_LIKE:
      return state.filter(like => like.id !== action.payload.id);

    case GET_LIKES:
      return action.payload

    default:
      return state
  }
}
