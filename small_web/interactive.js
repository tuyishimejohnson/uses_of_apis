let text = document.querySelector(".text")
let but = document.querySelector(".search")

let meIn = fetch("https://anapioficeandfire.com/api/characters/583")
                

but.addEventListener("click", function(){
    meIn.then(function(res){
        return res.json();
    }).then(function(data) {
        let a = Math.floor(Math.random()*8)
        text.textContent = data.aliases[a];
    });
})




