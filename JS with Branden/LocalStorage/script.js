document.getElementById("myForm").addEventListener("submit", function(e){
    e.preventDefault()

    let firstname = document.getElementById("name").value
    let lastname = document.getElementById("lastname").value
    let occupation = document.getElementById("occupation").value

    let UserJson = {
        firstname : firstname,
        lastname : lastname,
        occupation : occupation
    }

    console.log(UserJson)
    localStorage.setItem(`${UserJson.firstname}`, JSON.stringify(UserJson))
    document.getElementById("myForm").reset()

    console.log(localStorage.getItem("Harry"))

    let HarryString = localStorage.getItem("Harry")
    console.log(HarryString + " ", typeof(HarryString))

    let HarryJson = JSON.parse(HarryString)
    console.log(HarryJson + " ", typeof(HarryJson))
    console.log(HarryJson.occupation)
})