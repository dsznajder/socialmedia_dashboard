import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import DropzoneUpload from './DropzoneUpload'
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
      disableButton: true,
      files: []
    }
  }

  componentDidMount = () => {
    this.refs.postTextInput.focus()
  }

  inputValueChange = event => {
    this.setState({
      postText: event.target.value,
      disableButton: event.target.value.length <= 0
    });
  }

  handleFilesChange = (files) => this.setState({
    files
  })

  createPost = event => {
    event.preventDefault()

    const data = {
      text: this.state.postText,
      files: this.state.files
    }

    this.props.addPost(data)
    this.setState({
      files: []
    })
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
          <DropzoneUpload
            files={this.state.files}
            filesChanged={(files) => this.setState({ files })}
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
