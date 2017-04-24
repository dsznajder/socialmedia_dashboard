import React, {PropTypes} from 'react'
import ReactOnRails from 'react-on-rails'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import DropzoneUpload from './DropzoneUpload'
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
      files: [],
      disableButton: true
    }
  }

  inputValueChange = event => {
    this.setState({
      commentText: event.target.value,
      disableButton: event.target.value.length <= 0
    });
  }

  createComment = event => {
    event.preventDefault()
    const csrfToken = ReactOnRails.authenticityToken()
    const data = {
      post_id: this.props.postId,
      text: this.state.commentText,
      files: this.state.files
    }

    this.props.addComment(data, csrfToken)
    this.setState({
      files: []
    })
    event.target.reset();
  }

  handleFilesChange = files => {
    this.setState({
      files
    })
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
          <DropzoneUpload
            files={this.state.files}
            filesChanged={this.handleFilesChange}
          />
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
