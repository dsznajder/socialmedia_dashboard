import React, {PropTypes} from 'react'
import ReactOnRails from 'react-on-rails'
import $ from 'jquery'

export default class AddComment extends React.Component {
  static propTypes = {
    comment: PropTypes.object,
    postId: PropTypes.number
  }

  constructor() {
    super();
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
    event.preventDefault();
    $.post('/comments', {
      authenticity_token: csrfToken,
      post_id: this.props.postId,
      text: this.state.commentText
    });
    this.setState({disableButton: false})
  }

  render() {
    return (
      <div className='col-md-3'>
        <form className='form-inline' onSubmit={this.createComment}>
          <div className='form-group'>
            <input
              className='form-control'
              name='commentText'
              onChange={this.inputValueChange}
              placeholder='Comment it!'
              ref='commentTextInput'
              value={this.state.commentText}
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
