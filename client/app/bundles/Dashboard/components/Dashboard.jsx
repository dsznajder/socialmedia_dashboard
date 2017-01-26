import React, {PropTypes} from 'react';
import PostsList from './PostsList'
import AddPost from './AddPost'

export default class Dashboard extends React.Component {
  static propTypes = {
    posts: PropTypes.array
  }

  render() {
    return (
      <div>
        <AddPost />
        <PostsList
          posts={this.props.posts}/>
      </div>
    )
  }
}
