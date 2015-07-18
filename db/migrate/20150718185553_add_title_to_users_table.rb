class AddTitleToUsersTable < ActiveRecord::Migration
  def change
    add_column :users, :title, :string
  end
end
