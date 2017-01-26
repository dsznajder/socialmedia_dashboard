import React, {PropTypes} from 'react';
import PostsList from './PostsList'

export default class Dashboard extends React.Component {
  static propTypes = {
    posts: PropTypes.array
  }

  render() {
    return (
      <div>
        <PostsList
          posts={this.props.posts}/>
      </div>
    )
  }
}
