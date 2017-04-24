class Post < ApplicationRecord
  belongs_to :user

  has_many :comments
  has_many :likes
  has_many :attachments, as: :attachable, inverse_of: :attachable

  validates :text, presence: true

  accepts_nested_attributes_for :attachments
end
