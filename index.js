let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0

function increment() {
    if( count < 9000000){
    count++
    }
    countEl.textContent = count
    countEl.style.color = ("green")
}
    function Decrement() {
    if( count > -9000000){
    count--}
   countEl.textContent = count
     countEl.style.color = ("red")
}
function Reset() { count = 0
     countEl.textContent = count
    countEl.style.color = ("black")
     }
function Save() { 
    let counts = count + ","
    saveEl.textContent += counts

}
