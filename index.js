let count = 0
let textCount = document.getElementById("text-count");
let savedP = document.getElementById("saved");

function increment() {
    count += 1
    textCount.textContent = count; 
}

function save() {
    // console.log(count)
    let savedCount = count + " - ";
    savedP.textContent += savedCount;
    textCount.textContent = 0;
    count = 0;
}

// function increment() {
//     document.getElementById("text-count").innerText++
// }

