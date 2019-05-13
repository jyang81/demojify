class PuzzleSerializer < ActiveModel::Serializer
  attributes :id, :clue, :answer, :category, :likes
  belongs_to :user
end
