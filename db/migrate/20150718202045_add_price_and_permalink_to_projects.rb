class AddPriceAndPermalinkToProjects < ActiveRecord::Migration
  def change
    add_column :projects, :price, :integer
    add_column :projects, :permalink, :string
  end
end
