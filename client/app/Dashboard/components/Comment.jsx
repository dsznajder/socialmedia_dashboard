import React, {PropTypes} from 'react'
import ReactOnRails from 'react-on-rails'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {addLike} from '../actions/addLike.js'
import {getLikes} from '../actions/getLikes.js'

export class Comment extends React.Component {
  static propTypes = {
    addLike: PropTypes.func,
    comment: PropTypes.object,
    getLikes: PropTypes.func,
    likes: PropTypes.array
  }

  componentWillMount = () => {
    this.props.getLikes()
  }

  countLikes = () => {
    return this.props.likes.filter(like => like.comment_id == this.props.comment.id).length
  }

  onClick = event => {
    let csrfToken = ReactOnRails.authenticityToken()
    event.preventDefault()
    this.props.addLike(null, this.props.comment.id, csrfToken)
  }

  render() {
    return (
      <div className='container-fluid'>
        <span>{this.props.comment.text} {this.countLikes()}</span>
        <button onClick={this.onClick}>+1</button>
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
