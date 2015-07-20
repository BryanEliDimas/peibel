class Project < ActiveRecord::Base
  belongs_to :user
  validates :name, :description, :content, :user_id, presence: true
  include Payola::Sellable
end
