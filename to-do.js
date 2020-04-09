let ourForm = document.getElementById("ourForm")
let ourInput = document.getElementById("ourInput")
let ourUL = document.getElementById("ourUL")

ourForm.addEventListener("submit", (argument) => {
  argument.preventDefault()
  createItem(ourInput.value)
  ourInput.value = ""
  ourInput.focus()
})

function createItem(insertableItem) {
  let ourHTML = `<li>${insertableItem} <button onclick="deleteItem(this)">Delete</button></li>`
  ourUL.insertAdjacentHTML("beforeend", ourHTML)
}

function deleteItem(argument) {
  argument.parentElement.remove()
}
