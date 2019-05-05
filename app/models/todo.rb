class Todo < ApplicationRecord
  validates_presence_of :name, :date

  has_one :color
end
