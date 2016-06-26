class Reader < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
         
  has_many :reader_books
  has_many :books, through: :reader_books

  validates :name, presence: true

  def books_read
    self.books
  end

  def reading_log
    self.reader_books.collect{|b| [Book.find_by_id(b.book_id).name, b.minutes]}.flatten
  end
end
