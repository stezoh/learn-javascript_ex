// document.getElementById("count").innerText = 5

let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("saved-el")
let countHistoryEl = document.getElementById("countHistory-el")
let saveDateEl = document.getElementById("saveDate-el")

//console.log(countEl)

let count = 0
let totalCount = 0
var savedate = new Date().toLocaleString();


function increment() {
    count += 1
    countEl.innerText = count
}

function save() {
    totalCount = totalCount + count
    saveEl.innerText = totalCount
    let countHistory = count + " - "
    count = 0
    countEl.innerText = count
    countHistoryEl.textContent += countHistory

    saveDateEl.innerText = "Last saved: " + savedate
    savedate = new Date().toLocaleString()
}
