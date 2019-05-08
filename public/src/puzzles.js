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
    let ul = document.getElementById('puzzles')
    puzzles.forEach(puzzle => {
      let li = document.createElement('li')
      li.textContent = puzzle.clue

      ul.appendChild(li)
    })
  }

  function getGuesses(puzzle){
    console.log({puzzle})
  }

  function main() {
    getPuzzles()
  }

  const createBtn = document.querySelector('#create-puzzle')






  const addBtn = document.getElementById('new-puzzle-btn')
  const puzzleForm = document.querySelector('.container')
  let addPuzzle = false

  addBtn.addEventListener('click', () => {
    // hide & seek with the form
    addPuzzle = !addPuzzle
    if (addPuzzle) {
      puzzleForm.style.display = 'block'
    } else {
      puzzleForm.style.display = 'none'
    }
  })


  main()

});
