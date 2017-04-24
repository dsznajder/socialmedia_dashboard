class PostsController < ApplicationController
  before_action :authenticate_user!

  expose :posts
  expose :post

  def create
    post = current_user.posts.new(post_params)

    if post.save
      render json: post, include: { attachments: { methods: [:attachment_url] } }
    else
      render json: post.errors, status: :unprocessable_entity
    end
  end

  private

  def post_params
    params.permit(:text, attachments_attributes: [:attachment])
  end
end
