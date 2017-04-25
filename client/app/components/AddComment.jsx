import React, {PropTypes} from 'react'
import ReactOnRails from 'react-on-rails'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {addComment} from '../actions/addComment.js'

export class AddComment extends React.Component {
  static propTypes = {
    addComment: PropTypes.func,
    comment: PropTypes.object,
    postId: PropTypes.number
  }

  constructor() {
    super()
    this.state = {
      commentText: '',
      disableButton: true
    }
  }

  inputValueChange = event => {
    this.setState({commentText: event.target.value})
    if (event.target.value.length > 0) {
      this.setState({disableButton: false})
    } else {
      this.setState({disableButton: true})
    }
  }

  createComment = event => {
    let csrfToken = ReactOnRails.authenticityToken()
    event.preventDefault()
    this.props.addComment(this.props.postId, this.state.commentText, csrfToken)
    event.target.reset();
  }

  render() {
    return (
      <div className='col-md-3'>
        <form className='form-inline' onSubmit={this.createComment}>
          <div className='form-group'>
            <input
              className='form-control'
              defaultValue=''
              name='commentText'
              onChange={this.inputValueChange}
              placeholder='Comment it!'
              ref='commentTextInput'
            />
          </div>
          <input
            className='btn btn-info'
            disabled={this.state.disableButton}
            name='createComment'
            type='submit'
            value='Add comment'
          />
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  addComment
}, dispatch)

export default connect(null, mapDispatchToProps)(AddComment)
