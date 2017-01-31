import React, {PropTypes} from 'react'
import ReactOnRails from 'react-on-rails'
import $ from 'jquery'

export default class Comment extends React.Component {
  static propTypes = {
    comment: PropTypes.object,
    likes: PropTypes.array
  }

  countLikes = () => {
    return this.props.likes.filter(like => like.comment_id == this.props.comment.id).length
  }

  onClick = event => {
    let csrfToken = ReactOnRails.authenticityToken()

    $.post('/likes', {
      comment_id: this.props.comment.id,
      authenticity_token: csrfToken
    });
  }

  render() {
    return (
      <div className='container-fluid'>
        <span>{this.props.comment.text} {this.countLikes()}</span>
        <button onClick={this.onClick}>+1</button>
      </div>
    )
  }
}
