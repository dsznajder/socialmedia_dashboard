import {GET_USER} from '../actions/types'

export default (state = {id: null}, {type, user}) => {
  switch(type) {
    case GET_USER:
      return {
        ...state,
        ...user
      };
      
    default:
      return state;
  }
}
