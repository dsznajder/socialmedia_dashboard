class PostsController < ApplicationController
  before_action :authenticate_user!

  expose :posts
  expose :post

  def create
    if params[:text].present?
      Post.create(user: current_user, text: params[:text])
    end
    redirect_to root_path
  end
end
