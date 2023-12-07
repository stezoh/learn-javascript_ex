// document.getElementById("count").innerText = 5

let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("saved-el")
let countHistoryEl = document.getElementById("countHistory-el")
let saveDateEl = document.getElementById("saveDate-el")

//console.log(countEl)

let count = 0
let totalCount = 0
var countHst = new Array(3)
var savedate = new Date().toLocaleString();
countHst[0] = countHst[1] = countHst[2] = 0

function increment() {
    count += 1
    countEl.innerText = count
}

function save() {
    totalCount = totalCount + count
    saveEl.innerText = totalCount
    countHst[0] = countHst[1]
    countHst[1] = countHst[2]
    countHst[2] = count
    count = 0
    countEl.innerText = count
    countHistoryEl.textContent = "Previous counts: " + countHst[0] + "-" + countHst[1] + "-" + countHst[2]
    saveDateEl.innerText = "Last saved: " + savedate
    savedate = new Date().toLocaleString()
}
