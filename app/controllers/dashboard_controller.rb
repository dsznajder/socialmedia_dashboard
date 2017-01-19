class DashboardController < ApplicationController
  expose :posts, ->{ Post.all }
  expose :comments, ->{ Comment.all }
end
