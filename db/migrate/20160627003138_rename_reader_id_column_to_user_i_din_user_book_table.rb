class RenameReaderIdColumnToUserIDinUserBookTable < ActiveRecord::Migration
  def change
     rename_column :user_books, :reader_id, :user_id
  end
end
