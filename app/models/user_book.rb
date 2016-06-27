class UserBook < ActiveRecord::Base
  belongs_to :user
  belongs_to :book

  def add_minutes(minutes)
    # binding.pry
    self.minutes = minutes
  end
end
