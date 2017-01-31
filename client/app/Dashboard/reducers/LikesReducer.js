import {ADD_LIKE, GET_LIKES} from '../actions/types.js'

export default (state = [], action) => {
  switch (action.type) {
    case ADD_LIKE:
      return [action.payload, ...state]
    case GET_LIKES:
      return action.payload
    default:
      return state
  }
}
