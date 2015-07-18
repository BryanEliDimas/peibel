class PopulateSkillsOnUsers < ActiveRecord::Migration
  def change
    User.find_each do |user|
      user.skills = ("Javascript, Angular, CSS3, UX")
      user.save
    end
  end
end
