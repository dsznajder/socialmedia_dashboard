import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {addLike} from '../actions/addLike.js'
import {getLikes} from '../actions/getLikes.js'
import Like from './Like'

export class Comment extends React.Component {
  static propTypes = {
    comment: PropTypes.object,
    getLikes: PropTypes.func,
    likes: PropTypes.array
  }

  constructor() {
    super();
    this.itemLikes = [];
  }

  componentWillMount = () => {
    this.props.getLikes()
  }

  componentWillUpdate({ likes, comment }) {
    this.itemLikes = likes.filter(like => like.comment_id == comment.id);
  }

  countLikes() {
    return this.itemLikes.length;
  }

  render() {
    return (
      <div className='container-fluid'>
        <span>{this.props.comment.text} {this.countLikes()}</span>
        <Like
            commentId={this.props.comment.id}
            likes={this.itemLikes}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  likes: state.likes
})

const mapDispatchToProps = dispatch => bindActionCreators({
  addLike,
  getLikes
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Comment)
