import {ADD_COMMENT, GET_COMMENTS_LIST} from '../actions/types.js'

export default (state = [], action) => {
  switch (action.type) {
    case ADD_COMMENT:
      return [action.payload, ...state]
    case GET_COMMENTS_LIST:
      return action.payload
    default:
      return state
  }
}
