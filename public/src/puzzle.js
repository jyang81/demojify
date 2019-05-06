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

  main()

});
