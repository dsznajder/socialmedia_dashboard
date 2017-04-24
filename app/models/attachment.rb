class Attachment < ApplicationRecord
  belongs_to :attachable, polymorphic: true
  has_attached_file :attachment
  validates_attachment :attachment, content_type: { content_type: ["image/jpeg", "image/png", "image/gif"] }

  def attachment_url
    attachment.url
  end
end
