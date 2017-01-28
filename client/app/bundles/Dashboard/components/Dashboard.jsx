import React, {PropTypes} from 'react';
import PostsList from './PostsList'
import AddPost from './AddPost'

export default class Dashboard extends React.Component {
  static propTypes = {
    comments: PropTypes.array,
    posts: PropTypes.array
  }

  render() {
    return (
      <div>
        <AddPost />
        <PostsList
          comments={this.props.comments}
          posts={this.props.posts}
        />
      </div>
    )
  }
}
