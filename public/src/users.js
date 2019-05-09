document.addEventListener('DOMContentLoaded', () => {

  const URL = '/api/v1/users'
  let USER
  const userForm = document.getElementById('user-form')
  const displayLogin = document.getElementById('splash')

  userForm.addEventListener('submit', handleSubmit)
    // if (USER) {
    //   displayLogin.style.display = 'none'
    // } else {
    //   displayLogin.style.display = 'block'
    // }


  function handleSubmit(ev) {
    ev.preventDefault()
    console.log("form input:", ev.target.elements.username.value)
    let username = ev.target.elements.username.value
    ev.target.elements.username.value = ""
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
      .then(user => {
        addUser(user)
        USER = user
        window.user = USER
        console.log("USER:", USER)
      })
  }


  function getUsers() {
    fetch(URL)
      .then(res => res.json())
      .then(users => {
        displayUsers(users)
      })
  }


  function displayUsers(users) {
    users.forEach(user => {
      addUser(user)
    })
  }

  function addUser(user) {
    let div = document.getElementById('users')
    let ul = document.createElement('ul')
    let li = document.createElement('li')
    li.textContent = user.username
    ul.appendChild(li)
    div.appendChild(ul)
  }

  function main() {
    getUsers()
  }

  main()

});
