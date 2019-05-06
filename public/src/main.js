document.addEventListener('DOMContentLoaded', () => {

  const URL = '/api/v1/users'

  function getUsers() {
    fetch(URL)
      .then(res => res.json())
      .then(users => {
        console.log({
          users
        })
        displayUsers(users)
      })
  }

  function displayUsers(users) {
    let ul = document.getElementById('users')
    users.forEach(user => {
      let li = document.createElement('li')
      li.textContent = user.username
      ul.appendChild(li)
    })
  }

  function main() {
    getUsers()
  }

  main()

});