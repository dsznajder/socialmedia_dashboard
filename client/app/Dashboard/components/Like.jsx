import React, { Component, PropTypes } from 'react';
import {bindActionCreators} from 'redux';
import ReactOnRails from 'react-on-rails'
import {connect} from 'react-redux';
import {addLike} from '../actions/addLike';
import {removeLike} from '../actions/removeLike'

export class Like extends Component {
  static propTypes = {
    likes: PropTypes.array.isRequired,
    addLike: PropTypes.func,
    commentId: PropTypes.number,
    postId: PropTypes.number,
    removeLike: PropTypes.func,
    user: PropTypes.object
  }

  constructor() {
    super();

    this.state = {
      like: null
    }
  }

  componentWillReceiveProps = ({ likes, user }) => {
    this.setState({
      like: Array.find(likes, like => like.user_id === user.id)
    })
  }

  handleAddLike = () => {
    const csrfToken = ReactOnRails.authenticityToken();
    this.props.addLike(this.props.postId, this.props.commentId, csrfToken);
  }

  handleRemoveLike = () => {
    const csrfToken = ReactOnRails.authenticityToken();
    const like = this.state.like;

    this.props.removeLike(like.id, csrfToken);
  }

  render() {
    return (
      this.state.like ?
      <button onClick={this.handleRemoveLike}>-1</button> :
      <button onClick={this.handleAddLike}>+1</button>
    );
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
