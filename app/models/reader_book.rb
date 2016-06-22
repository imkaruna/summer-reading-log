class ReaderBook < ActiveRecord::Base
  belongs_to :reader
  belongs_to :book

  def add_minutes(minutes)
    # binding.pry
    self.minutes = minutes
  end
end
