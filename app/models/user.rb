class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  validates :role, presence: true

  has_many :user_books
  has_many :books, through: :user_books
  attr_accessor :status

  def books_read
    self.books
  end

  def reading_log
    self.user_books.collect{|b| [Book.find_by_id(b.book_id).name, b.minutes]}.flatten
  end
end
