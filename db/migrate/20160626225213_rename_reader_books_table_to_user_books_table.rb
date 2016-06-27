class RenameReaderBooksTableToUserBooksTable < ActiveRecord::Migration
  def change
    rename_table :reader_books, :user_books
  end
end
