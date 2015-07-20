class AddOutlineToProjects < ActiveRecord::Migration
  def change
    add_column :projects, :outline, :string
  end
end
