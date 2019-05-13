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

User.create(username: "Homer")
User.create(username: "Joe")

Puzzle.create(clue: "😄 👣 🐧", answer: "Happy Feet", category: "Movie", user_id: 1, likes: 0)
Puzzle.create(clue: "🐭 🏰 🎆", answer: "Disneyland", category: "Place", user_id: 2, likes: 0)
Puzzle.create(clue: "👩‍🎤 🥩 👗", answer: "Lady Gaga", category: "Person", user_id: 2, likes: 0)
Puzzle.create(clue: "💪 🦆 🏒", answer: "Mighty Ducks", category: "Movie", user_id: 1, likes: 0)
Puzzle.create(clue: "🏠 😱", answer: "Home Alone", category: "Movie", user_id: 2, likes: 0)
Puzzle.create(clue: "👻 ➡️ 🐚", answer: "Ghost in the Shell", category: "Movie", user_id: 2, likes: 0)
Puzzle.create(clue: "🎤 💧", answer: "Mic Drop", category: "Phrase", user_id: 1, likes: 0)
Puzzle.create(clue: "♭ 🏌️‍ 🏫", answer: "Flatiron School", category: "Place", user_id: 2, likes: 0)
Puzzle.create(clue: "📼 🔪 📻 ⭐️", answer: "Video Killed the Radio Star", category: "Song", user_id: 2, likes: 0)
Puzzle.create(clue: "👦 🔮 👨🏻‍💼 🎹", answer: "Big", category: "Movie", user_id: 2, likes: 0)

Guess.create(content: "Smiley Footprints", puzzle_id: 1)
Guess.create(content: "March of the Penguins", puzzle_id: 1)
Guess.create(content: "Mouse Castle", puzzle_id: 2)
Guess.create(content: "Rat Kingdom", puzzle_id: 2)
