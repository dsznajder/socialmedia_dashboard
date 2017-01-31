import React, {PropTypes} from 'react'
import Post from './Post'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {getPostsList} from '../actions/getPostsList.js'

export class PostsList extends React.Component {
  static propTypes = {
    comments: PropTypes.array,
    getPostsList: PropTypes.func,
    likes: PropTypes.array,
    posts: PropTypes.array
  }

  componentWillMount = () => {
    this.props.getPostsList()
  }

  generatePosts = () => {
    if(this.props.posts != undefined){
      return this.props.posts.map((post) => {
        return <Post key={post.id} post={post}/>
      })
    }
  }

  render() {
    return (
      <div>
        <h3>Posts:</h3>
        <h5>
          {this.generatePosts()}
        </h5>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  posts: state.posts
})

const mapDispatchToProps = dispatch => bindActionCreators({
  getPostsList
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(PostsList)
