class User < ActiveRecord::Base
  has_many :projects
  has_secure_password
  validates :first_name, :last_name, :username, length: { minimum: 3 }, on: :create
  validates :first_name, :last_name, :username, :email, :password, presence: true, on: :create
  validates :username, length: { maximum: 16 }, on: :create
  validates :password, length: { minimum: 5, message: "Please choose a more secure password" }, on: :create
  validates :username, :email, uniqueness: true, on: :create

  def full_name
    "#{first_name} #{last_name}"
  end
end
