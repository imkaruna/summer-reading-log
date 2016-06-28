class AddStatusColumnToReaderBooksTable < ActiveRecord::Migration
  def change
    add_column :user_books, :status, :string, default: "unread"
  end
end
