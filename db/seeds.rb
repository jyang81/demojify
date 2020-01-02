# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# User.destroy_all
# Puzzle.destroy_all
# Guess.destroy_all

# User.create(username: "Homer")
# User.create(username: "Joe")

Puzzle.create(clue: "😄 👣 🐧", answer: "Happy Feet", category: "Movie", user_id: 1, likes: 3)
Puzzle.create(clue: "🐭 🏰 🎆", answer: "Disneyland", category: "Place", user_id: 2, likes: 4)
Puzzle.create(clue: "👩‍🎤 🥩 👗", answer: "Lady Gaga", category: "Person", user_id: 1, likes: 5)
Puzzle.create(clue: "💪 🦆 🏒", answer: "Mighty Ducks", category: "Movie", user_id: 1, likes: 3)
Puzzle.create(clue: "🏠 😱", answer: "Home Alone", category: "Movie", user_id: 2, likes: 7)
Puzzle.create(clue: "👻 ➡️ 🐚", answer: "Ghost in the Shell", category: "Movie", user_id: 2, likes: 2)
Puzzle.create(clue: "🎤 💧", answer: "Mic Drop", category: "Phrase", user_id: 1, likes: 1)
Puzzle.create(clue: "♭ 🏌️‍ 🏫", answer: "Flatiron School", category: "Place", user_id: 2, likes: 3)
Puzzle.create(clue: "📼 🔪 📻 ⭐️", answer: "Video Killed the Radio Star", category: "Song", user_id: 1, likes: 6)
Puzzle.create(clue: "👦 🔮 👨🏻‍💼 🎹", answer: "Big", category: "Movie", user_id: 2, likes: 4)
Puzzle.create(clue: "🐰🦆🐷🏀👽👽👽", answer: "Space Jam", category: "Movie", user_id: 3, likes: 4)
Puzzle.create(clue: "🌴🦖🦕🌴", answer: "Jurassic Park", category: "Movie", user_id: 12, likes: 7)
Puzzle.create(clue: "🛣🤜🥊", answer: "Street Fighter", category: "Game", user_id: 19, likes: 1)
Puzzle.create(clue: "🦉 + 🐡", answer: "Hootie and the Blowfish", category: "Musician", user_id: 22, likes: 1)
Puzzle.create(clue: "🐍🐍 ✈️", answer: "Snakes on a Plane", category: "Movie", user_id: 42, likes: 0)
Puzzle.create(clue: "🛷🌹", answer: "Citizen Kane", category: "Movie", user_id: 50, likes: 10)
Puzzle.create(clue: "🐖🐖 👧🏻 🐉", answer: "Spirited Away", category: "Movie", user_id: 70, likes: 11)
Puzzle.create(clue: "♾📖 🐉🐺", answer: "Neverending Story", category: "Movie", user_id: 46, likes: 5)
Puzzle.create(clue: "🇨🇭💪🔪", answer: "Swiss Army Knife", category: "Thing", user_id: 33, likes: 2)
Puzzle.create(clue: "🍄🌻⭐️", answer: "Super Mario Bros.", category: "Game", user_id: 66, likes: 3)
Puzzle.create(clue: "🤠👨‍🚀🐷🦖🥔", answer: "Toy Story", category: "Movie", user_id: 82, likes: 10)
Puzzle.create(clue: "🌊👨‍👨‍👦‍👦👨‍👨‍👦‍👦👨‍👨‍👧 🎰💰", answer: "Ocean's Eleven", category: "Movie", user_id: 80, likes: 11)
Puzzle.create(clue: "🕯 🕰 🍵 🥀", answer: "Beauty and the Beast", category: "Movie", user_id: 77, likes: 9)
Puzzle.create(clue: "∞ ⚔️", answer: "Avengers: Infinity War", category: "Movie", user_id: 9, likes: 8)

# Guess.create(content: "Smiley Footprints", puzzle_id: 1)
# Guess.create(content: "March of the Penguins", puzzle_id: 1)
# Guess.create(content: "Mouse Castle", puzzle_id: 2)
# Guess.create(content: "Rat Kingdom", puzzle_id: 2)
