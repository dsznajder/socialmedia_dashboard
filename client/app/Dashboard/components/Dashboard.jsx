import React, {PropTypes} from 'react';
import PostsList from './PostsList'
import AddPost from './AddPost'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import reducers from '../reducers/rootReducer.js'
import {composeWithDevTools} from 'redux-devtools-extension'

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))

export default class Dashboard extends React.Component {
  static propTypes = {
    comments: PropTypes.array,
    likes: PropTypes.array,
    posts: PropTypes.array
  }

  render() {
    return (
      <Provider store={store} >
        <div className='container-fluid'>
          <AddPost/>
          <PostsList comments={this.props.comments} likes={this.props.likes} posts={this.props.posts}/>
        </div>
      </Provider>
    )
  }
}
