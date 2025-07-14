class User {
  constructor(firstName, lastName, email, password, balance = 0.0) {
    this.firstName = firstName
    this.lastName = lastName
    this.email = email
    this.password = password
    this.balance = balance
    this.transactions = []
  }

  addTransaction(type, amount) {
    this.transactions.push({ type, amount })
    updateTransactionHistory(type, amount)
  }
}

const users = [
  new User("Stephanie", "Einahpets", "stephanie@email.com", "password"),
  new User("Bob", "theBuilder", "btb@email.com", "password"),
  new User("John", "Doe", "johndoe@email.com", "password"),
]

let loggedInUser = null

//UI helpers

function updateTextContent(className, text) {
  const element = document.querySelector(`.${className}`)
  if (element) element.textContent = text
}

//show/hide elements by class
function toggleVisibility(className, shouldShow) {
  const elements = document.getElementsByClassName(className)
  Array.from(elements).forEach((element) => {
    element.classList.toggle("hidden", !shouldShow)
  })
}

function showGreeting() {
  if (loggedInUser) {
    updateTextContent("user-greeting", `Hello, ${loggedInUser.firstName}!`)
  }
}

function showBalance() {
  if (loggedInUser) {
    updateTextContent(
      "balance-display",
      `Your balance is $${loggedInUser.balance.toFixed(2)}`
    )
  }
}

//auth
function login() {
  const email = document.querySelector("#email").value
  const password = document.querySelector("#password").value

  const user = users.find(
    (user) => user.email === email && user.password === password
  )
  if (user) {
    loggedInUser = user

    toggleVisibility("login-section", false)
    toggleVisibility("atm-menu", true)
    toggleVisibility("transaction-history", true)
    showBalance()
    showGreeting()
  } else {
    toggleVisibility("login-error", true)
  }
}

function logout() {
  ;[
    "atm-menu",
    "transaction-history",
    "withdraw-section",
    "deposit-section",
  ].forEach((className) => toggleVisibility(className, false))
  document.querySelector(".transaction-list").innerHtml = ""
  document.getElementById("email").value = ""
  document.getElementById("password").value = ""
  loggedInUser = null
  toggleVisibility("login-section", true)
}

//transactions

//show deposit/withdraw
function toggleTransaction(type) {
  toggleVisibility("deposit-section", type === "deposit")
  toggleVisibility("withdraw-section", type === "withdraw")
}

function completeTransaction(type) {
  const amountInputId =
    type === "deposit" ? "deposit-amount" : "withdraw-amount"
  const amount = parseFloat(document.getElementById(amountInputId).value)

  const errorClass = `${type}-error`
  let errorMessage = ""

  if (isNaN(amount) || amount <= 0) {
    errorMessage = "Please enter a valid amount"
  } else if (type == "withdraw" && amount > loggedInUser.balance) {
    errorMessage = "Insufficient funds"
  }

  if (errorMessage) {
    const errorElement = document.querySelector(`.${errorClass}`)
    errorElement.textContent = errorMessage
    toggleVisibility(errorClass, true)
    setTimeout(() => toggleVisibility(errorClass, false), 3000)
  } else {
    toggleVisibility(errorClass, false) //test this
    loggedInUser.balance += type === "deposit" ? amount : -amount
    loggedInUser.addTransaction(
      type === "deposit" ? "Deposit" : "Withdraw",
      amount
    )
    //show balance
    showBalance()
    document.getElementById(amountInputId).value = ""
    toggleVisibility(`${type}-section`, false)
  }
}

function updateTransactionHistory(type, amount) {
  const transactionList = document.querySelector(".transaction-list")
  const transactionItem = document.createElement("li")
  transactionItem.classList.add(type === "Deposit" ? "deposit" : "withdraw")
  transactionItem.textContent = `${type} - $${amount.toFixed(2)}`
  transactionList.appendChild(transactionItem)

  while (transactionList.children.length > 5) {
    transactionList.removeChild(transactionList.firstChild)
  }
}
