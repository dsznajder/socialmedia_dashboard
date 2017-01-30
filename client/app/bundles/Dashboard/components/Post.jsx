import React, {PropTypes} from 'react'
import ReactOnRails from 'react-on-rails'
import $ from 'jquery'
import AddComment from './AddComment'
import Comment from './Comment'

export default class Post extends React.Component {
  static propTypes = {
    comments: PropTypes.array,
    likes: PropTypes.array,
    post: PropTypes.object
  }

  countLikes = () => {
    return this.props.likes.filter(like => like.post_id == this.props.post.id).length
  }

  generateComments = () => {
    if(this.props.comments != undefined){
      return this.props.comments.filter(comment => comment.post_id == this.props.post.id).map((comment) => {
        return this.commentElement(comment)
      })
    }
  }

  commentElement = comment => {
    return <Comment comment={comment} key={comment.id} likes={this.props.likes}/>
  }

  onClick = event => {
    let csrfToken = ReactOnRails.authenticityToken()

    $.post('/likes', {
      post_id: this.props.post.id,
      authenticity_token: csrfToken
    });
  }

  render() {
    return (
      <div className='container-fluid'>
        <span>{this.props.post.text} {this.countLikes()}</span>
        <button onClick={this.onClick}>+1</button>
        <div>
          {this.generateComments()}
        </div>
        <AddComment postId={this.props.post.id}/>
      </div>
    )
  }
}
