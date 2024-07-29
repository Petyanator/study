let text = document.getElementById("myDiv")
text.innerHTML = `<p class="main-text">Hello,World!</p>`
text.innerHTML += `<img id = "moon" src="./assets/Log In or Sign Up to View.jpg" alt="">`

const sun = document.querySelector("#moon")

sun.src = "./assets/sun.jpg"
sun.className = "container"
text.className = "container"
text.style.backgroundColor = "black"
text.style.color = "white"

