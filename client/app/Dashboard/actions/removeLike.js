import {ajax} from 'jquery';
import {REMOVE_LIKE} from './types';

const removeLikeAction = (payload) => {
  return {
    type: REMOVE_LIKE,
    payload
  }
}

export const removeLike = (likeId, csrfToken) => {
  return dispatch => {
    ajax({
      url: `/likes/${likeId}`,
      method: 'delete',
      data: {
        authenticity_token: csrfToken
      }
    }).then(like => dispatch(removeLikeAction(like)));
  }
}
