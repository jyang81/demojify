document.addEventListener('DOMContentLoaded', () => {

  const URL = '/api/v1/users'

  const userForm = document.getElementById('user-form')
  const displayLogin = document.getElementById('splash')
  let addUser = true

  userForm.addEventListener('submit', makeUser
    // addUser = !addUser
    // if (addUser) {
    //   displayLogin.style.display = 'block'
    // } else {
    //   displayLogin.style.display = 'none'
    // }
  )

  function makeUser(ev) {
    ev.preventDefault()
    console.log(ev.target.elements.username.value)
    let username = ev.target.elements.username.value
    createUser(username)
  }

  function createUser(username) {
    fetch(URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          'username': username
        })
      })
      .then(res => res.json())
      .then(user => showUser(user))
  }


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
    users.forEach(user => {
      showUser(user)
    })
  }

  function showUser(user) {
    let ul = document.getElementById('users')
    let li = document.createElement('li')
    li.textContent = user.username
    ul.appendChild(li)
  }

  function main() {
    getUsers()
  }

  main()

});
