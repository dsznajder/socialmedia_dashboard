import {ADD_COMMENT} from './types.js'
import $ from 'jquery'
import ReactOnRails from 'react-on-rails';

const addCommentAction = comment => ({
  type: ADD_COMMENT,
  payload: comment
})

export const addComment = ({ post_id, text, files }) => {
  const fields = {
    authenticity_token: ReactOnRails.authenticityToken(),
    post_id,
    text
  };

  // Create empty form data object
  const data = new FormData();

  // Append data to FormData object
  Object.keys(fields).forEach(field => data.append(field, fields[field]));
  files.forEach((file, index) => data.append('attachments_attributes[][attachment]', file));

  return dispatch => {
    $.ajax('/comments', {
      method: 'POST',
      cache: false,
      processData: false,
      contentType: false,
      dataType: 'json',
      data,
      success: newComment => {
        return dispatch(addCommentAction(newComment))
      }
    })
  }
}
