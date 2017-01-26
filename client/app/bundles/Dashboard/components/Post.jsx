import React, {PropTypes} from 'react'
import ReactOnRails from 'react-on-rails'
import $ from 'jquery'

export default class Post extends React.Component {
  static propTypes = {
    post: PropTypes.object
  }

  constructor() {
    super()
    this.state = {
      likes: this.props
    }
  }

  onClick = event => {
    let csrfToken = ReactOnRails.authenticityToken()
    $.post('/posts', {
      id: this.props.post.id,
      likes: this.props.post.likes,
      authenticity_token: csrfToken
    });

    this.setState({
      likes: this.state.likes + 1
    })
  }

  render() {
    return (
      <div>
        <span>{this.props.post.text}</span>
        <p>{this.props.post.likes}</p>
        <button onClick={this.onClick}>Add point! :) </button>
      </div>
    )
  }
}
