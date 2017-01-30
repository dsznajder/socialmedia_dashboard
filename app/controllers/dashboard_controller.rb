class DashboardController < ApplicationController
  before_action :authenticate_user!

  expose :posts, -> { Post.all.order(:id) }
  expose :comments, -> { Comment.all.order(:id) }
  expose :likes, -> { Like.all }
end
