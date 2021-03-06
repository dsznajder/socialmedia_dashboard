import React, {PropTypes} from 'react'
import AddComment from './AddComment'
import Comment from './Comment'
import Like from './Like'
import AttachmentsList from './AttachmentsList'
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

  constructor() {
    super();

    this.state = {
      itemLikes: []
    };
  }

  componentWillMount = () => {
    this.props.getCommentsList()
    this.props.getLikes()
  }

  componentWillReceiveProps = ({ likes, post }) => {
    this.setState({
      itemLikes: likes.filter(like => like.post_id == post.id)
    })
  }

  countLikes = () => {
    return this.state.itemLikes.length;
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
      <div className='container-fluid' style={{border: '1px solid black'}}>
        <span>{this.props.post.text} {this.countLikes()}</span>
        <Like likes={this.state.itemLikes} postId={this.props.post.id} />
        <AttachmentsList attachments={this.props.post.attachments} />
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
