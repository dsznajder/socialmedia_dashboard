class PostsController < ApplicationController
  before_action :authenticate_user!

  expose :posts
  expose :post

  def create
    if params[:text].present?
      Post.create(user: current_user, text: params[:text], likes: 0)
    elsif params[:likes].present?
      post.update_attributes(likes: params[:likes].to_i + 1)
    end
    redirect_to root_path
  end
end
