import {ADD_COMMENT} from './types.js'
import $ from 'jquery'

const addCommentAction = comment => ({
  type: ADD_COMMENT,
  payload: comment
})

export const addComment = (postId, text, csrfToken) => {
  return dispatch => {
    $.ajax('/comments', {
      method: 'POST',
      data: {
        authenticity_token: csrfToken,
        post_id: postId,
        text: text
      },
      success: newComment => {
        return dispatch(addCommentAction(newComment))
      }
    })
  }
}
