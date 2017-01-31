class PostsController < ApplicationController
  before_action :authenticate_user!

  expose :posts
  expose :post

  def create
    return unless params[:text].present?
    render json: Post.create(user: current_user, text: params[:text])
  end
end
