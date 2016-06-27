class RenameReaderTableToUserTable < ActiveRecord::Migration
  def change
    rename_table :readers, :users
  end
end
