import {get} from 'jquery';
import {GET_USER} from './types';

const getUserAction = user => ({
  type: GET_USER,
  user
})

export const getUser = () => {
  return dispatch => {
    get('/api/user').then(user => dispatch(getUserAction(user)))
  }
}
