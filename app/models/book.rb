class Book < ActiveRecord::Base
  has_many :reader_books, dependent: :destroy
  has_many :readers, through: :reader_books

  validates :name, :author, :genre, presence: true
end
