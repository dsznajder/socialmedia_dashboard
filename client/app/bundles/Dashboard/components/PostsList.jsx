import React, {PropTypes} from 'react';
import Post from './Post'

export default class PostsList extends React.Component {
  static propTypes = {
    posts: PropTypes.array
  }

  generatePosts = () => {
    return this.props.posts.map((post) => {
      return this.postElement(post)
    })
  }

  postElement = post => {
    return (
      <Post
        key={post.id}
        post={post} />
    )
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
