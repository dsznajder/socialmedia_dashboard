import {GET_USER} from '../actions/types'

const initialState = {
  id: null
}

export default (state = initialState, {type, user}) => {
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
