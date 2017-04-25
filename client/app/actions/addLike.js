import {ADD_LIKE} from './types.js'
import $ from 'jquery'
import ReactOnRails from 'react-on-rails';

const addLikeAction = like => ({
  type: ADD_LIKE,
  payload: like
})

export const addLike = (postId, commentId) => {
  return dispatch => {
    $.ajax('/likes', {
      method: 'POST',
      data: {
        authenticity_token: ReactOnRails.authenticityToken(),
        post_id: postId,
        comment_id: commentId
      },
      success: newLike => {
        return dispatch(addLikeAction(newLike))
      }
    })
  }
}
