//pobieramy liste ul
let ul = document.getElementById("items");

//pobieramy button
let btn = document.querySelector("button");

//pobieramy liste
let lista = document.querySelectorAll("li");

//obecna ilość li
//let count = ul.childElementCount;
let count = lista.length;

function showLi() {
    let li = document.createElement("li");
    ++count;
    li.innerText = `Item ${count}`
    li.className = "item";
    ul.appendChild(li);
}
btn.addEventListener("click", showLi);