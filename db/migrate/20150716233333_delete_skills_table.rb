class DeleteSkillsTable < ActiveRecord::Migration
  def change
    drop_table :skills
  end
end
