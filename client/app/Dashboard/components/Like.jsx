import React, { PropTypes } from 'react';
import {bindActionCreators} from 'redux';
import ReactOnRails from 'react-on-rails'
import {connect} from 'react-redux';
import {addLike} from '../actions/addLike';
import {removeLike} from '../actions/removeLike'

class Like extends React.Component {
  static propTypes = {
    addLike: PropTypes.func,
    commentId: PropTypes.number,
    likes: PropTypes.array,
    postId: PropTypes.number,
    removeLike: PropTypes.func,
    user: PropTypes.object
  }

  static defaultProps = {
    commentId: null,
    likes: [],
    postId: null
  }

  constructor() {
    super();
    this.handleAddLike = this.handleAddLike.bind(this);
    this.handleRemoveLike = this.handleRemoveLike.bind(this);
  }

  getLike() {
    return Array.find(this.props.likes, like => like.user_id === this.props.user.id);
  }

  handleAddLike() {
    const csrfToken = ReactOnRails.authenticityToken();
    this.props.addLike(this.props.postId, this.props.commentId, csrfToken);
  }

  handleRemoveLike() {
    const csrfToken = ReactOnRails.authenticityToken();
    const like = this.getLike();

    this.props.removeLike(like.id, csrfToken);
  }

  renderDislikeButton() {
    return <button onClick={this.handleRemoveLike}>-1</button>
  }

  renderLikeButton() {
    return <button onClick={this.handleAddLike}>+1</button>
  }

  render() {
    return this.getLike() ? this.renderDislikeButton() : this.renderLikeButton();
  }
}

const mapStateToProps = ({ user }) => ({
  user
})

const mapDispatchToProps = dispatch => bindActionCreators({
  addLike,
  removeLike
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Like)
