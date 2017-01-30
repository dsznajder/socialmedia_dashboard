import React, {PropTypes} from 'react'
import ReactOnRails from 'react-on-rails'
import $ from 'jquery'

export default class AddPost extends React.Component {
  static propTypes = {
    post: PropTypes.object
  }

  constructor() {
    super();
    this.state = {
      postText: '',
      disableButton: true
    }
  }

  componentDidMount = () => {
    this.refs.postTextInput.focus();
  }

  inputValueChange = event => {
    this.setState({postText: event.target.value})
    if (event.target.value.length > 0) {
      this.setState({disableButton: false})
    } else {
      this.setState({disableButton: true})
    }
  }

  createPost = event => {
    let csrfToken = ReactOnRails.authenticityToken()
    event.preventDefault();
    $.post('/posts', {
      text: this.state.postText,
      authenticity_token: csrfToken
    });
    this.setState({disableButton: false})
  }

  render() {
    return (
      <div className='container-fluid'>
        <form className='form-inline' onSubmit={this.createPost}>
          <textarea
            className='form-control'
            name='postText'
            onChange={this.inputValueChange}
            placeholder="What's going on?"
            ref='postTextInput'
            value={this.state.postText}
          />
          <input
            className='btn btn-primary'
            disabled={this.state.disableButton}
            name='createPost'
            type='submit'
            value='Add post'
          />
        </form>
      </div>
    )
  }
}
