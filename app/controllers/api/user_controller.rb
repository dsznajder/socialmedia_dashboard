class Api::UserController < ApplicationController
  def index
    user = current_user.nil? ? User.new : current_user
    render json: user
  end
end
