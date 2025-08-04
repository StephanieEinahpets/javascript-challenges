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

  users.forEach((user) => {
    const userContainer = document.createElement("div")
    userContainer.classList.add("individual")

    const name = document.createElement("h6")
    name.textContent = user.firstName

    const controlsContainer = document.createElement("div")
    controlsContainer.classList.add("controls")

    const weight = document.createElement("p")
    weight.textContent = userWeights[user.id]

    const buttonRow = document.createElement("div")
    buttonRow.classList.add("button-row")

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

    buttonRow.appendChild(minusBtn)
    buttonRow.appendChild(plusBtn)
    controlsContainer.appendChild(weight)
    controlsContainer.appendChild(buttonRow)
    userContainer.appendChild(name)
    userContainer.appendChild(controlsContainer)
    sidebar.appendChild(userContainer)
  })
}

async function pickName(users) {
  const display = document.querySelector(".main-section h1")
  let count = 0

  await new Promise((resolve) => {
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

        display.textContent = `✦•┈ 𓉘\u00A0\u00A0${chosen.firstName}\u00A0\u00A0𓉝 ┈•✦`
        highlightSelected(chosen.firstName)
        resolve()
      }
    }, 100)
  })
}

getUsers().then((users) => {
  allUsers = users
  users.forEach((user) => (userWeights[user.id] = 1))
  renderUsers(users)
  document.querySelector(".generate").disabled = false
})

function highlightSelected(name) {
  const allIndividuals = document.querySelectorAll(".individual")

  allIndividuals.forEach((el) => {
    const heading = el.querySelector("h6")
    if (heading && heading.textContent === name) {
      el.classList.add("highlighted")
    } else {
      el.classList.remove("highlighted")
    }
  })
}

document.querySelector(".generate").addEventListener("click", async () => {
  const button = document.querySelector(".generate")
  button.disabled = true
  await pickName(allUsers)
  button.disabled = false
})
