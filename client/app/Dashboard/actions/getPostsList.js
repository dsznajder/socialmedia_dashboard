import {GET_POSTS_LIST} from './types.js'
import $ from 'jquery'

const getPostsAction = posts => ({
  type: GET_POSTS_LIST,
  payload: posts
})

export const getPostsList = () => {
  return dispatch => {
    $.get('/api/posts', (posts) => dispatch(getPostsAction(posts)))
  }
}
