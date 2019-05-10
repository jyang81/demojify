document.addEventListener('DOMContentLoaded', () => {

  const PUZZLE_URL = '/api/v1/puzzles'
  const GUESS_URL = '/api/v1/guesses'

  function getPuzzles() {
    fetch(PUZZLE_URL)
      .then(res => res.json())
      .then(puzzles => {
        displayPuzzles(puzzles)
      })
  }

  function displayPuzzles(puzzles) {
    puzzles.forEach(puzzle => {
      addPuzzle(puzzle)
    })
  }

  function addPuzzle(puzzle) {
    const outerDiv = document.getElementById('puzzle-collection')

    const innerDiv = document.createElement('div')
    innerDiv.classList.add('card')
    innerDiv.id = puzzle.id
    outerDiv.appendChild(innerDiv)

    const h1 = document.createElement('h1')
    h1.textContent = puzzle.clue
    innerDiv.appendChild(h1)

    const row = document.createElement('div')
    row.classList.add('row')
    const col = document.createElement('div')
    col.classList.add('column')
    const h4 = document.createElement('h4')
    h4.textContent = puzzle.category
    col.appendChild(h4)
    row.appendChild(col)

    const col2 = document.createElement('div')
    col2.textContent = `❤️ ${puzzle.likes}`
    col2.id = "like"
    row.appendChild(col2)
    col2.addEventListener('click', () => {
      col2.textContent = `❤️ ${++puzzle.likes}`
    })

    innerDiv.appendChild(row)

    // form field for guess
    const form = document.createElement('form')
    const input = document.createElement('input')
    input.type = "text"
    input.name = "guess"
    input.placeholder = "Make a guess"
    input.required = true
    input.style.display = "block"
    input.style.width = "18rem"
    form.appendChild(input)

    const br = document.createElement('br')
    form.appendChild(br)

    const guessBtn = document.createElement('input')
    guessBtn.type = "submit"
    guessBtn.value = "See Answer"
    form.appendChild(guessBtn)

    innerDiv.appendChild(form)
    form.addEventListener('submit', (ev) => {
      handleGuess(ev, puzzle)
      showAnswer(puzzle)
      guessBtn.style.display = "none"
    })
    // when button clicked, it will show the answer + all the guesses and append the guess to the list

  }

  function showAnswer(puzzle) {
    const card = document.getElementById(puzzle.id)
    const h3 = document.createElement('h3')
    h3.textContent = puzzle.answer
    card.appendChild(h3)
  }

// ======= GUESSES ==================================

  function handleGuess(ev, puzzle){
    ev.preventDefault()
    console.log("guess:", ev.target.elements.guess.value)
    let guess = ev.target.elements.guess.value
    console.log("puzzle id:", puzzle.id)
    ev.target.elements.guess.value = ""
    createGuess(guess, puzzle)
  }

  function createGuess(guess, puzzle) {
    fetch(GUESS_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          'content': guess,
          'puzzle_id': puzzle.id
        })
      })
      .then(res => res.json())
      .then(newGuess => {
        addGuess(newGuess)
      })
  }

  function getGuesses() {
    fetch(GUESS_URL)
    .then(res => res.json())
    .then(guesses => {
      displayGuesses(guesses)
    })
  }

  function displayGuesses(guesses) {
    guesses.forEach(guess => {
      addGuess(guess)
    })
  }

  function addGuess(guess) {
    console.log("guess:", guess)
    const card = document.getElementById(guess.puzzle_id)
    const div = document.createElement('div')
    div.textContent = "Your Guess: " + guess.content

    card.appendChild(div)

  }

// =========== MAKE A PUZZLE ===============================

  const puzzleForm = document.getElementById('add-puzzle-form')
  puzzleForm.addEventListener('submit', handleSubmit)

  function handleSubmit(ev) {
    ev.preventDefault()
    console.log(ev.target.elements)
    let clue = ev.target.elements.clue.value
    let answer = ev.target.elements.answer.value
    let category = ev.target.elements.category.value
    ev.target.elements.clue.value = ""
    ev.target.elements.answer.value = ""
    ev.target.elements.category.value = ""
    createPuzzle(clue, answer, category)
  }

  function createPuzzle(clue, answer, category) {
    fetch(PUZZLE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          'clue': clue,
          'answer': answer,
          'category': category,
          'user_id': window.user.id,
          'likes': 0
        })
      })
      .then(res => res.json())
      .then(puzzle => addPuzzle(puzzle))
  }


  const addBtn = document.getElementById('new-puzzle-btn')
  const puzzleContainer = document.getElementById('create-container')
  let clicked = false

  addBtn.addEventListener('click', () => {
    // hide & seek with the form
    clicked = !clicked
    if (clicked) {
      puzzleContainer.style.display = 'block'
    } else {
      puzzleContainer.style.display = 'none'
    }
  })

  function main() {
    getPuzzles()
  }


  main()

});
