class CreateSkills < ActiveRecord::Migration
  def change
    create_table :skills do |t|
      t.string :content
      t.string :user_id
      t.timestamps
    end
  end
end
