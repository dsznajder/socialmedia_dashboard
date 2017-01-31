import React from 'react'
import PostsList from './PostsList'
import AddPost from './AddPost'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import reducers from '../reducers/rootReducer.js'
import {composeWithDevTools} from 'redux-devtools-extension'

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))

export default class Dashboard extends React.Component {
  render() {
    return (
      <Provider store={store} >
        <div className='container-fluid'>
          <AddPost/>
          <PostsList/>
        </div>
      </Provider>
    )
  }
}
