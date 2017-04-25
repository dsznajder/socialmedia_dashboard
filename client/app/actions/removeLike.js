import {ajax} from 'jquery';
import {REMOVE_LIKE} from './types';
import ReactOnRails from 'react-on-rails';

const removeLikeAction = (payload) => ({
  type: REMOVE_LIKE,
  payload
});

export const removeLike = (likeId, csrfToken) => {
  return dispatch => {
    ajax({
      url: `/likes/${likeId}`,
      method: 'delete',
      data: {
        authenticity_token: ReactOnRails.authenticityToken()
      }
    }).then(like => dispatch(removeLikeAction(like)));
  }
}
