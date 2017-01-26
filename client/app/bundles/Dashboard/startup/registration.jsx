import ReactOnRails from 'react-on-rails';
import AddPost from '../components/AddPost';
import Dashboard from '../components/Dashboard';
import Post from '../components/Post';
import PostsList from '../components/PostsList';

ReactOnRails.register({
  AddPost
});

ReactOnRails.register({
  Dashboard
});

ReactOnRails.register({
  PostsList
});

ReactOnRails.register({
  Post
});
