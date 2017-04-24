import {ADD_POST} from './types.js'
import $ from 'jquery'

const addPostAction = post => ({
  type: ADD_POST,
  payload: post
})

export const addPost = ({ text, files }, csrfToken) => {
  const fields = {
    authenticity_token: csrfToken,
    text
  };

  // Create empty form data object
  const data = new FormData();

  // Append data to FormData object
  Object.keys(fields).forEach(field => data.append(field, fields[field]));
  files.forEach((file, index) => data.append('attachments_attributes[][attachment]', file));

  return dispatch => {
    $.ajax('/posts', {
      method: 'POST',
      cache: false,
      processData: false,
      contentType: false,
      dataType: 'json',
      data,
      success: newPost => {
        return dispatch(addPostAction(newPost))
      }
    })
  }
}
