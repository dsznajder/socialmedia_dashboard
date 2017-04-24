class Api::CommentsController < ApplicationController
  def index
    comments = Comment.includes(:attachments).order(id: :desc)
    render json: comments, include: { attachments: { methods: [:attachment_url] } }
  end
end
