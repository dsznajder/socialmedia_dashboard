import React, {PropTypes} from 'react'
import ReactOnRails from 'react-on-rails'
import $ from 'jquery'
import AddComment from './AddComment'
import Comment from './Comment'

export default class Post extends React.Component {
  static propTypes = {
    comments: PropTypes.array,
    post: PropTypes.object
  }

  constructor() {
    super()
    this.state = {
      likes: this.props
    }
  }

  generateComments = () => {
    return this.props.comments.filter(comment => comment.post_id == this.props.post.id )
      .map((comment) => {
        return this.commentElement(comment)
      })
  }

  commentElement = comment => {
    return (
      <Comment
        comment={comment}
        key={comment.id}
      />
    )
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
        <div>
          {this.generateComments()}
        </div>
        <AddComment
          postId={this.props.post.id}
        />
        <button onClick={this.onClick}>Add point! :) </button>
      </div>
    )
  }
}
