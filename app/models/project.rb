class Project < ActiveRecord::Base

  validates :title, :description, :content, presence: true
end
