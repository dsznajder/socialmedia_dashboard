import React, {PropTypes} from 'react'
import ReactOnRails from 'react-on-rails'
import $ from 'jquery'

export default class Post extends React.Component {
  static propTypes = {
    comment: PropTypes.object
  }

  constructor() {
    super()
    this.state = {
      likes: this.props
    }
  }

  onClick = event => {
    let csrfToken = ReactOnRails.authenticityToken()

    $.post('/comments', {
      id: this.props.comment.id,
      likes: this.props.comment.likes,
      authenticity_token: csrfToken
    });

    this.setState({
      likes: this.state.likes + 1
    })
  }

  render() {
    return (
      <div>
        <span>{this.props.comment.text}</span>
        <p>{this.props.comment.likes}</p>
        <button onClick={this.onClick}>Add point to this comment! :) </button>
      </div>
    )
  }
}
