import {combineReducers} from 'redux'
import PostsReducer from './PostsReducer.js'
import CommentsReducer from './CommentsReducer.js'
import LikesReducer from './LikesReducer.js'
import UserReducer from './UserReducer'

export default combineReducers({
  posts: PostsReducer,
  comments: CommentsReducer,
  likes: LikesReducer,
  user: UserReducer
})
