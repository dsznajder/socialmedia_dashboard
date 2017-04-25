import {GET_LIKES} from './types.js'
import $ from 'jquery'

const getLikesAction = likes => ({
  type: GET_LIKES,
  payload: likes
})

export const getLikes = () => {
  return dispatch => {
    $.get('/api/likes', (likes) => dispatch(getLikesAction(likes)))
  }
}
