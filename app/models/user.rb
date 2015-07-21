class User < ActiveRecord::Base
  has_many :projects
  has_secure_password
  acts_as_messageable
  acts_as_follower
  acts_as_followable

  validates :first_name, :last_name, :username, length: { minimum: 3 }, on: :create
  validates :first_name, :last_name, :username, :email, :password, presence: true, on: :create
  validates :username, length: { maximum: 16 }, on: :create
  validates :password, length: { minimum: 5, message: "Please choose a more secure password" }, on: :create
  validates :username, :email, uniqueness: true, on: :create

  def full_name
    "#{first_name} #{last_name}"
  end

  #Returning the email address of the model if an email should be sent for this object (Message or Notification).
  #If no mail has to be sent, return nil.
  def mailboxer_email(object)
    #Check if an email should be sent for that object
    #if true
    return "#{email}"
    #if false
    #return nil
  end
end
