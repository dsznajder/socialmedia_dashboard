import {ADD_POST} from './types.js'
import $ from 'jquery'

const addPostAction = post => ({
  type: ADD_POST,
  payload: post
})

export const addPost = (text, csrfToken) => {
  return dispatch => {
    $.ajax('/posts', {
      method: 'POST',
      data: {
        authenticity_token: csrfToken,
        text: text
      },
      success: newPost => {
        return dispatch(addPostAction(newPost))
      }
    })
  }
}
