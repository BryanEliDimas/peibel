class CreateEducators < ActiveRecord::Migration
  def change
    create_table :educators do |t|
      t.string :first_name
      t.string :last_name
      t.string :username
      t.string :email
      t.string :password_digest
      t.integer :project_id

      t.timestamps
    end
  end
end
