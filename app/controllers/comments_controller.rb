class CommentsController < ApplicationController
  before_action :authenticate_user!

  expose :comments
  expose :comment

  def create
    if params[:text].present?
      Comment.create(post: Post.find(params[:post_id]), user: current_user, text: params[:text], likes: 0)
    elsif params[:likes].present?
      comment.update_attributes(likes: params[:likes].to_i + 1)
    end
    redirect_to root_path
  end
end
