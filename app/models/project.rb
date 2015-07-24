class Project < ActiveRecord::Base
  belongs_to :user
  has_many :purchased_projects
  validates :name, :description, :content, :user_id, presence: true
  include Payola::Sellable
end
