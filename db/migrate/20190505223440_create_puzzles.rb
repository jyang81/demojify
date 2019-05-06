class CreatePuzzles < ActiveRecord::Migration[5.2]
  def change
    create_table :puzzles do |t|
      t.string :clue
      t.string :answer
      t.string :category
      t.integer :user_id
      t.integer :likes

      t.timestamps
    end
  end
end
