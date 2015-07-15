class Project < ActiveRecord::Base
  belongs_to :user
  validates :title, :description, :content, :user_id, presence: true
end
