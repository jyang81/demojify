document.addEventListener('DOMContentLoaded', () => {

  const URL = '/api/v1/puzzles'

  function getPuzzles() {
    fetch(URL)
      .then(res => res.json())
      .then(puzzles => {
        console.log({
          puzzles
        })
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
    outerDiv.appendChild(innerDiv)

    const h1 = document.createElement('h1')
    h1.textContent = puzzle.clue
    innerDiv.appendChild(h1)

    const h4 = document.createElement('h4')
    h4.textContent = puzzle.category
    innerDiv.appendChild(h4)

    const p = document.createElement('p')
    p.textContent = `♥ ${puzzle.likes}`
    innerDiv.appendChild(p)
    p.addEventListener('click', () => {
      p.textContent = `♥ ${++puzzle.likes}`
    })

    // add form field for guess
    const guessBtn = document.createElement('button')
    guessBtn.textContent = "Guess"
    innerDiv.appendChild(guessBtn)
    // when button clicked, it will show the answer + all the guesses and append the guess to the list
  }


  function getGuesses(puzzle) {
    console.log({
      puzzle
    })
  }

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
    fetch(URL, {
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
