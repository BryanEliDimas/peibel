class PopulateTitleOnUsers < ActiveRecord::Migration
  def change
    User.find_each do |user|
      user.title = "Frontend Web Developer"
      user.save
    end
  end
end
