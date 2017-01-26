import React, {PropTypes} from 'react'

export default class Post extends React.Component {
  static propTypes = {
    post: PropTypes.object
  }

  render(){
    return (
      <div>
        <span>{this.props.post.text}</span>
        <p>{this.props.post.likes}</p>
      </div>
    )
  }
}
