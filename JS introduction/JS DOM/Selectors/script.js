const specialText = document.getElementById("special-item") //SingleItem
const getDivs = document.getElementsByTagName("div") // HTML Collection --> Live Collector
const getButton = document.getElementsByName("click-me") //Node List  --> Live Collector
const firstIntro = document.querySelectorAll(".intro") // Node list - good --> Static Collector
const AllHighlight = document.querySelectorAll(".highlight")// Nodelist --> Static Collector
const allP = document.getElementsByTagName("p") //HTMLCollection
console.log(getButton)
console.log(getDivs)
console.log(specialText)
console.log(firstIntro)



const myLink = document.querySelector("#myGoogleLink")
myLink.href = "https://www.wcoding.com"
myLink.innerHTML = "<strong>Lets go to Wcoding</strong>"
console.log(AllHighlight[0].classList)
console.log(AllHighlight[0].className)

AllHighlight[0].className = "intro"
AllHighlight[0].classList.add("highlight")
console.log(allP[1].classList)
// innerHTML - shows everything, textContent - only shows a certain text 
// let href = myLink.getAttribute("href")
// href = "https://www.wcoding.com"
// myLink.setAttribute("href", href)