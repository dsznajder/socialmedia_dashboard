class Api::PostsController < ApplicationController
  def index
    posts = Post.all.includes(:attachments).order(id: :desc)
    render json: posts, include: { attachments: { methods: [:attachment_url] } }
  end
end
