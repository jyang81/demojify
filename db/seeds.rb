# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Puzzle.destroy_all
Guess.destroy_all

User.create(username: "homer")
User.create(username: "bart")

Puzzle.create(clue: "😄 👣 🐧", answer: "Happy Feet", category: "Movie", user_id: 1, likes: 0)
Puzzle.create(clue: "🐭 🏰 ", answer: "Disneyland", category: "Place", user_id: 2, likes: 0)

Guess.create(content: "Smiley Footprints", puzzle_id: 1)
Guess.create(content: "March of the Penguins", puzzle_id: 1)
Guess.create(content: "Mouse Castle", puzzle_id: 2)
Guess.create(content: "Rat Kingdom", puzzle_id: 2)
