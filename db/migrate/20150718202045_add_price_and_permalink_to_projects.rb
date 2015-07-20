class AddPriceAndPermalinkToProjects < ActiveRecord::Migration
  def change
    add_column :projects, :price, :string
    add_column :projects, :permalink, :string
  end
end
