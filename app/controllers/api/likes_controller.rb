class Api::LikesController < ApplicationController
  def index
    likes = Like.all
    render json: likes
  end
end
