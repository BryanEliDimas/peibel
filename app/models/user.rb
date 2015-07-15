class User < ActiveRecord::Base
  has_secure_password
  validates :first_name, :last_name, :username, length: { minimum: 3 }
  validates :first_name, :last_name, :username, :email, :password, presence: true
  validates :username, length: { maximum: 16 }
  validates :password, length: { minimum: 5, message: "Please choose a more secure password" }
  validates :username, :email, uniqueness: true

  def full_name
    "#{first_name} #{last_name}"
  end
end
