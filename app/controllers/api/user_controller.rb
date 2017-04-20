class Api::UserController < ApplicationController
  def index
    user = current_user.nil? ? User.new({ id: nil }) : current_user
    render json: user
  end
end
