const API_URL = "https://javascript-capstone-backend.onrender.com/users"

let allUsers = []
let userWeights = {}

async function getUsers() {
  const res = await fetch(API_URL)
  const users = await res.json()
  return users
}

function renderUsers(users) {
  const sidebar = document.querySelector(".name-section")
  sidebar.innerHTML = ""

  users.forEach((user) => {
    const userDiv = document.createElement("div")
    userDiv.classList.add("individual")

    const name = document.createElement("h6")
    name.textContent = user.firstName

    const weight = document.createElement("p")
    weight.textContent = userWeights[user.id]

    const plusBtn = document.createElement("button")
    plusBtn.classList.add("plus-button")
    plusBtn.textContent = "+"

    const minusBtn = document.createElement("button")
    minusBtn.classList.add("minus-button")
    minusBtn.textContent = "-"

    plusBtn.addEventListener("click", () => {
      userWeights[user.id]++
      weight.textContent = `${userWeights[user.id]}`
    })

    minusBtn.addEventListener("click", () => {
      if (userWeights[user.id] > 1) {
        userWeights[user.id]--
        weight.textContent = `${userWeights[user.id]}`
      }
    })

    userDiv.appendChild(name)
    userDiv.appendChild(weight)
    userDiv.appendChild(plusBtn)
    userDiv.appendChild(minusBtn)
    sidebar.appendChild(userDiv)
  })
}

function pickName(users) {
  const display = document.querySelector(".main-section h1")
  let count = 0

  const interval = setInterval(() => {
    const randomIndex = Math.floor(Math.random() * users.length)
    display.textContent = users[randomIndex].firstName
    count++

    if (count >= 20) {
      clearInterval(interval)

      const weightedPool = []
      users.forEach((user) => {
        const weight = userWeights[user.id]
        for (let i = 0; i < weight; i++) {
          weightedPool.push(user)
        }
      })

      const finalIndex = Math.floor(Math.random() * weightedPool.length)
      const chosen = weightedPool[finalIndex]

      display.textContent = `✦•┈「 ${chosen.firstName} 」┈•✦`
      highlightSelected(chosen.firstName)
    }
  }, 100)
}

getUsers().then((users) => {
  allUsers = users
  users.forEach((user) => (userWeights[user.id] = 1))
  renderUsers(users)
})

document.querySelector(".generate").addEventListener("click", () => {
  pickName(allUsers)
})
