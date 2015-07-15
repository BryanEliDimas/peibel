class RenameEducatorTableToUserTable < ActiveRecord::Migration
  def change
    rename_table :educators, :users
  end
end
