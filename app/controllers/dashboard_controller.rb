class DashboardController < ApplicationController
  expose :posts, -> { Post.all.order(:id) }
  expose :comments, -> { Comment.all }
end
