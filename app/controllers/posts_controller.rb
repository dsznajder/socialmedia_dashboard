class PostsController < ApplicationController
  expose :posts
  expose :post

  def create
    # temporary solution till log panel :)
    if params[:text].present?
      Post.create(user: User.first, text: params[:text], likes: 0)
    elsif params[:likes].present?
      post.update_attributes(likes: params[:likes].to_i + 1)
    end
    redirect_to root_path
  end
end
