import {ADD_LIKE} from './types.js'
import $ from 'jquery'

const addLikeAction = like => ({
  type: ADD_LIKE,
  payload: like
})

export const addLike = (postId, commentId, csrfToken) => {
  return dispatch => {
    $.ajax('/likes', {
      method: 'POST',
      data: {
        authenticity_token: csrfToken,
        post_id: postId,
        comment_id: commentId
      },
      success: newLike => {
        return dispatch(addLikeAction(newLike))
      }
    })
  }
}
