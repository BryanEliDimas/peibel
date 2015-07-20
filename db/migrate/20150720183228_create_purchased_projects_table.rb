class CreatePurchasedProjectsTable < ActiveRecord::Migration
  def change
    create_table :purchased_projects do |t|
      t.integer :project_id
      t.integer :user_id
      t.timestamps
    end
  end
end
