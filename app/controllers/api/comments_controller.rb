class Api::CommentsController < ApplicationController
  def index
    comments = Comment.order(id: :desc)
    render json: comments
  end
end
