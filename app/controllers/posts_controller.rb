class PostsController < ApplicationController
  expose :posts
  expose :post

  def create
    # temporary solution till log panel :)
    Post.create(user: User.first, text: params[:text], likes: 0)
    redirect_to root_path
  end
end
