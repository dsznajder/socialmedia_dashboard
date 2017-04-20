import React, {PropTypes} from 'react'
import AddComment from './AddComment'
import Comment from './Comment'
import Like from './Like'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
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

  static defaultProps = {
    comments: []
  }

  constructor() {
    super();
    this.itemLikes = [];
  }

  componentWillMount = () => {
    this.props.getCommentsList()
    this.props.getLikes()
  }

  componentWillUpdate({ likes, post }) {
    this.itemLikes = likes.filter(like => like.post_id == post.id)
  }

  countLikes() {
    return this.itemLikes.length;
  }

  generateComments = () => {
    if(this.props.comments){
      return this.props.comments.filter(comment => comment.post_id == this.props.post.id).map((comment) => {
        return this.commentElement(comment)
      })
    }
  }

  commentElement = comment => {
    return <Comment comment={comment} key={comment.id}/>
  }

  render() {
    return (
      <div className='container-fluid'>
        <span>{this.props.post.text} {this.countLikes()}</span>
        <Like
            likes={this.itemLikes}
            postId={this.props.post.id}
        />
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
  getCommentsList,
  getLikes
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Post)
