class CommentsController < ApplicationController
  before_action :authenticate_user!

  expose :comments
  expose :comment

  def create
    return unless params[:text].present?
    render json: Comment.create(post: Post.find(params[:post_id]), user: current_user, text: params[:text])
  end
end
