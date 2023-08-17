

let meIn = fetch("https://anapioficeandfire.com/api/characters/583")
                .then(function(res){
                    return res.json();
                })
    
                .then(function(data) {
                    console.log(data);
                });

