class Like < ApplicationRecord
  belongs_to :user

  has_one :comment
  has_one :post
end
