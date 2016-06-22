class Reader < ActiveRecord::Base
  has_many :reader_books
  has_many :books, through: :reader_books

  def books_read
    self.books
  end

  def reading_log
    self.reader_books.collect{|b| [Book.find_by_id(b.book_id).name, b.minutes]}.flatten
  end
end
