// const myP = document.getElementById("myParagraph")
// const myDiv = myP.parentNode
// console.log(myDiv.childNodes)
// const myDiv = document.querySelector("#myDiv")
// let newLink = document.createElement("a")
// let newLinkText = document.createTextNode("Wcoding website");

// newLink.id = 'wc_link'
// newLink.href = "https://www.wcoding.com"
// newLink.target = "blank"
// newLink.textContent = "wcoding"
// myDiv.appendChild(newLink)
// console.log(myDiv)
// console.log(myDiv.childNodes)
// console.log(newLinkText)
// let text = document.createElement("p")
// const myDiv = document.createElement("div")
// text.innerHTML = `The <strong>World Wide Web Consortium</strong>, abbreviated as acronym<strong>W3C</strong>, is an
//     <a href="https://en.wikipedia.org/wiki/Standards_organization" title="standards organization">standards organization</a> non-profit organization responsible for promoting the compatibility of the <a href="https://en.wikipedia.org/wiki/World_Wide_Web_Consortium" title="World Wide Web">World Wide Web</a>.`
// myDiv.appendChild(text)
// console.log(myDiv.firstElementChild.textContent)
// // #1
// const divEx1 = document.createElement("div")
// divEx1.id = "divEx1"
// document.body.appendChild(divEx1)
// divEx1.appendChild(document.createTextNode("The "))
// const firstStrong = divEx1.appendChild(document.createElement("strong"))
// // firstStrong.appendChild(document.createTextNode("World Wide Web Consortium"))
// firstStrong.textContent = "World Wide Web Consortium"
// divEx1.appendChild(firstStrong)
// divEx1.appendChild(document.createTextNode(", abbreviated as acronym "))
// const secStrong = divEx1.appendChild(document.createElement("strong"))
// secStrong.textContent ="W3C"
// divEx1.appendChild(secStrong)
// divEx1.appendChild(document.createTextNode(", is an "))
// const anchor = divEx1.appendChild(document.createElement("a"))
// anchor.href = "https://en.wikipedia.org/wiki/Standards_organization"
// anchor.title = "standards organization"
// anchor.textContent = "standards organization"
// divEx1.appendChild(anchor)
// divEx1.appendChild(document.createTextNode(" non-profit organization responsible for promoting the compatibility of the "))
// const anchor2 = divEx1.appendChild(document.createElement("a"))
// anchor2.href = "https://en.wikipedia.org/wiki/World_Wide_Web_Consortium"
// anchor2.title = "World Wide Web"
// anchor2.textContent = "World Wide Web"
// divEx1.appendChild(anchor2)
// // #2
// const myDiv = document.body.appendChild(document.createElement("div"))
// myDiv.id = "EX2"
// const pupu = myDiv.appendChild(document.createElement("p"))
// pupu.appendChild(document.createTextNode("Kinds of Fish"))
// let i, array, list, userlist, listit
// list = myDiv.appendChild(document.createElement("ul"))
// userlist = prompt("Enter your list")
// array = userlist.split(", ")
// for(i = 0; i < array.length; i++){
//     listit = list.appendChild(document.createElement("li"))
//     listit.textContent =(array[i])
// }
// // #3
// const myDiv = document.body.appendChild(document.createElement("div"))
// myDiv.id = "EX3"
// const pupu = myDiv.appendChild(document.createElement("p"))
// pupu.appendChild(document.createTextNode("Languages based on ECMAScript :"))
// const lulu = myDiv.appendChild(document.createElement("dl"))
// let array1, array2
// array1 = ["JavaScript", "Node", "Vue", "React"]
// array2 = ["JavaScript is a scripting language mainly used in interactive web pages but also server-side.","Node is a low level backend server based on the javascript language", "Vue.js is a framework for JavaScript used to build web interfaces and one-page applications", "ReactJS is a declarative, efficient, and flexible JavaScript library for building user interfaces"]
// for (i = 0; i < array1.length && i < array2.length; i++){
//     a = lulu.appendChild(document.createElement("dt"))
//     a.appendChild(document.createTextNode(array1[i]))
//     b = lulu.appendChild(document.createElement("dd"))
//     b.appendChild(document.createTextNode(array2[i]))
// }
// // #4
// const myDiv = document.body.appendChild(document.createElement("div"))
// myDiv.id = "EX4"
// const myForm = myDiv.appendChild(document.createElement("form"))
// myForm.enctype = "multipart/form-data"
// myForm.method = "post" 
// myForm.action = "upload.php"
// const myField = myForm.appendChild(document.createElement("fieldset"))
// let myLegend, myDiv2, mylabel, myinput, myinput2
// myLegend = myField.appendChild(document.createElement("legend"))
// myLegend.textContent = "Upload an Image"
// myDiv2 = myField.appendChild(document.createElement("div"))
// myDiv2.style.textAlign = "center"
// mylabel = myDiv2.appendChild(document.createElement("label"))
// mylabel.htmlFor= "inputUpload"
// mylabel.textContent = "Image to upload:"
// myinput = myDiv2.appendChild(document.createElement("input"))
// myinput.type = "file"
// myinput.name = "inputUpload"
// myinput.id = "inputUpload"
// myDiv2.appendChild(document.createElement("br"))
// myDiv2.appendChild(document.createElement("br"))
// myinput2 = myDiv2.appendChild(document.createElement("input"))
// myinput2.type = "submit"
// myinput2.value = "send"
// #5
const list = document.getElementById("martine-books")
let bro, bro2
bro = list.insertBefore(document.createElement("li"), list.children[5])
bro.textContent = "Martine is on fire"
bro2 = list.appendChild(document.createElement("li"))
bro2.textContent = "Martine got married and lived happily ever after"







