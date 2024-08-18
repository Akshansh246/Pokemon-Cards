let main = document.getElementById("main");
let arr = ["bulbasaur.jpeg","charmender.jpeg","fox.jpeg","peechu.jpeg","pikachu.jpeg","snorlax.jpeg"]
let s = "";
for(let i=1; i<=60; i++){
    let r = Math.floor(Math.random()*arr.length);
    s += `<div class="card">
            <img src=${arr[r]} alt="">
        </div>`; 
}
main.innerHTML = s;
