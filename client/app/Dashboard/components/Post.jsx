import React, {PropTypes} from 'react'
import ReactOnRails from 'react-on-rails'
import AddComment from './AddComment'
import Comment from './Comment'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {addLike} from '../actions/addLike.js'
import {getCommentsList} from '../actions/getCommentsList.js'
import {getLikes} from '../actions/getLikes.js'

export class Post extends React.Component {
  static propTypes = {
    addLike: PropTypes.func,
    comments: PropTypes.array,
    getCommentsList: PropTypes.func,
    getLikes: PropTypes.func,
    likes: PropTypes.array,
    post: PropTypes.object
  }

  componentWillMount = () => {
    this.props.getCommentsList()
    this.props.getLikes()
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
    return <Comment comment={comment} key={comment.id}/>
  }

  onClick = event => {
    let csrfToken = ReactOnRails.authenticityToken()
    event.preventDefault()
    this.props.addLike(this.props.post.id, null, csrfToken)
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

const mapStateToProps = state => ({
  comments: state.comments,
  likes: state.likes
})

const mapDispatchToProps = dispatch => bindActionCreators({
  addLike,
  getCommentsList,
  getLikes
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Post)
