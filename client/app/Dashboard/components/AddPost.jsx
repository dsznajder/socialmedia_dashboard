import React, {PropTypes} from 'react'
import ReactOnRails from 'react-on-rails'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {addPost} from '../actions/addPost.js'

export class AddPost extends React.Component {
  static propTypes = {
    addPost: PropTypes.func,
    post: PropTypes.object
  }

  constructor() {
    super()
    this.state = {
      postText: '',
      disableButton: true
    }
  }

  componentDidMount = () => {
    this.refs.postTextInput.focus()
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
    event.preventDefault()
    this.props.addPost(this.state.postText, csrfToken)
    event.target.reset();
  }

  render() {
    return (
      <div className='container-fluid'>
        <form className='form-inline' onSubmit={this.createPost}>
          <textarea
            className='form-control'
            defaultValue=''
            name='postText'
            onChange={this.inputValueChange}
            placeholder="What's going on?"
            ref='postTextInput'
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

const mapDispatchToProps = dispatch => bindActionCreators({
  addPost
}, dispatch)

export default connect(null, mapDispatchToProps)(AddPost)
