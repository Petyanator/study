document.addEventListener("DOMContentLoaded", function(){
    let shipForm = document.getElementById("form")
    shipForm.addEventListener("submit", function(e){
        // Prevent the default behavior submission
        e.preventDefault()
        // First Method
        // let formData = new FormData(shipForm)
        // console.log(formData)
        // let FirstName = formData.get('firstname')
        // let SecondName = formData.get("secondname")
        // let City = formData.get("city")
        // let Zipcode = formData.get("zipcode")
        // let Date = formData.get("date")
        // let Email = formData.get("email")
        // let Agc = formData.get("agc")
        // console.log(FirstName)

        // Second Method
        let FirstName = e.target.elements["firstname"].value
        let SecondName = e.target.elements["secondname"].value
        let City = e.target.elements["city"].value
        let Zipcode = e.target.elements["zipcode"].value
        let Date = e.target.elements["date"].value
        let Email = e.target.elements["email"].value
        console.log(FirstName)
        verifyFormData(FirstName, SecondName, Zipcode, City, Date, Email))
        //////////////////////////////////////////////
    })
    function verifyFormData(FirstName, SecondName, Zipcode, City, Date, Email){
            if(FirstName.length > 10 || FirstName === ""){
                // return an error message
                console.log(FirstName + "error")
                errors.push(FirstName)
            }
            if(SecondName.length > 10 || SecondName === ""){
                // return an error message
                console.log(SecondName + "error")
                errors.push(SecondName)
            }
            if (Zipcode === "" || isNaN(Zipcode) || Zipcode.length != 5){
                // return
                console.log(Zipcode + "error")
                errors.push(Zipcode)
            }
            if(City.length < 10){
                // return
                console.log(City + "error")
                errors.push(City)
            }
        }
    return errors
