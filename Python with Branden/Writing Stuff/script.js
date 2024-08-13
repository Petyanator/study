const btn = document.getElementById("Btn")
let textstore = []
const mylist = document.getElementById("mylist")

// Load items from localStorage and display them
document.addEventListener("DOMContentLoaded", function(e) {
    let object = JSON.parse(localStorage.getItem("itemlist"))
    if (object && object.textstore) {
        textstore = object.textstore
        for (let i = 0; i < textstore.length; i++) {
            let li = document.createElement("li")
            li.textContent = textstore[i]
            mylist.appendChild(li)
        }
    }
})

// Add a new item to the list and localStorage
btn.addEventListener("click", function(e) {
    let input = document.getElementById("myText")
    if (input.value.trim() !== "") {
        textstore.push(input.value)
        let object = {textstore}
        localStorage.setItem("itemlist", JSON.stringify(object))

        let li = document.createElement("li")
        li.textContent = input.value
        mylist.appendChild(li)

        input.value = ""  // Clear the input field after adding the item
        console.log(JSON.parse(localStorage.getItem("itemlist")))
    }
})

document.getElementById('deleteAllBtn').addEventListener('click', function() {
    // Clear the list in the DOM
    while (mylist.firstChild) {
        mylist.removeChild(mylist.firstChild);
    }
    
    localStorage.removeItem('itemlist');
    
    textstore = [];
    
    console.log("All items removed from the list and localStorage");
});

document.getElementById('myText').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();  // Prevent the default form submission
        document.getElementById('Btn').click();
    }
});
const savebtn = document.getElementById("saveBtn")
savebtn.addEventListener("click", function(){
    let blob = new Blob([localStorage.getItem("itemlist")], {type: "json"})
    saveAs(blob, "data.json")
})
