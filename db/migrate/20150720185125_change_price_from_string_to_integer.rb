class ChangePriceFromStringToInteger < ActiveRecord::Migration
  def change
    change_column :projects, :price, :integer
  end
end
