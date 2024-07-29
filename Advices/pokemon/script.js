const myDiv = document.getElementById("displayPoke")


for (i = 1; i < 100; i++) {
    pokemonImg = document.createElement("img")
    pokemonImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
    myDiv.appendChild(pokemonImg)
    console.log(myDiv.appendChild(pokemonImg))
}