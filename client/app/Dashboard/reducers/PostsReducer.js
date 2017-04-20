import {ADD_POST, GET_POSTS_LIST} from '../actions/types.js'

export default (state = [], action) => {
  switch (action.type) {
    case ADD_POST:
      return [action.payload, ...state]
      
    case GET_POSTS_LIST:
      return action.payload

    default:
      return state
  }
}
