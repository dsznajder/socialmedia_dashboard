class Api::PostsController < ApplicationController
  def index
    posts = Post.all.order(id: :desc)
    render json: posts
  end
end
