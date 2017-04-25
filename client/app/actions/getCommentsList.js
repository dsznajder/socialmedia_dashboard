import {GET_COMMENTS_LIST} from './types.js'
import $ from 'jquery'

const getCommentsAction = comments => ({
  type: GET_COMMENTS_LIST,
  payload: comments
})

export const getCommentsList = () => {
  return dispatch => {
    $.get('/api/comments', (comments) => dispatch(getCommentsAction(comments)))
  }
}
