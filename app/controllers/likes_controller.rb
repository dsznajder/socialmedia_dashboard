class LikesController < ApplicationController
  before_action :authenticate_user!

  expose :likes
  expose :like

  def create
    if params[:post_id].present?
      Like.where(user: current_user, post_id: params[:post_id]).first_or_create
    elsif params[:comment_id].present?
      Like.where(user: current_user, comment_id: params[:comment_id]).first_or_create
    end
    redirect_to root_path
  end
end
