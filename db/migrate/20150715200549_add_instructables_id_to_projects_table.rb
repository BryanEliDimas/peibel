class AddInstructablesIdToProjectsTable < ActiveRecord::Migration
  def change
    add_column :projects, :instructables_id, :string
  end
end
