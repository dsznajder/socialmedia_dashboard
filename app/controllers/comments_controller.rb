class CommentsController < ApplicationController
  before_action :authenticate_user!

  expose :comments
  expose :comment

  def create
    comment = Comment.new(comment_params)
    comment.post = Post.find(params[:post_id])
    comment.user = current_user

    if comment.save
      render json: comment, include: { attachments: { methods: [:attachment_url] } }
    else
      render json: comment.errors, status: :unprocessable_entity
    end
  end

  private

  def comment_params
    params.permit(:text, attachments_attributes: [:attachment])
  end
end
