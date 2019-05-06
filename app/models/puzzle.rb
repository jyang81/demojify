class Puzzle < ApplicationRecord
  belongs_to :user
  has_many :guesses
end
