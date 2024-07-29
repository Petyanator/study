document.addEventListener("DOMContentLoaded", function(){
    let shipForm = document.getElementById("form")
    shipForm.addEventListener("submit", function(e){
        // Prevent the default behavior submission
        e.preventDefault()
        // First Method
        let formData = new FormData(shipForm)

        let hasErrors = false

        // console.log(formData)
        let FirstName = formData.get('firstname')
        let SecondName = formData.get("secondname")
        let City = formData.get("city")
        let Zipcode = formData.get("zipcode")
        let Date = formData.get("date")
        let Email = formData.get("email")
        let Agc = formData.get("agc")
        // console.log(FirstName)

        // Second Method
        // let FirstName = e.target.elements["firstname"].value
        // let SecondName = e.target.elements["secondname"].value
        // let City = e.target.elements["city"].value
        // let Zipcode = e.target.elements["zipcode"].value
        // let Date = e.target.elements["date"].value
        // let Email = e.target.elements["email"].value
        // console.log(FirstName)
        //////////////////////////////////////////////

        let errors = verifyFormData(FirstName, SecondName, Zipcode, City, Date, Email)
        if(errors.length > 0){
            hasErrors = true
            for(i = 0; i < errors.length; i++) {
                switch(errors[i]){
                    case FirstName:
                        shipForm.firstname.classList.add("input-error")
                        break
                    case SecondName:
                        shipForm.secondname.classList.add("input-error")
                        break
                    case Zipcode:
                        shipForm.zipcode.classList.add("input-error")
                        break
                    case City:
                        shipForm.city.classList.add("input-error")
                        break
                    case Date:
                        shipForm.date.classList.add("input-error")
                        break
                    case Email:
                        shipForm.email.classlist.add("input-error")
                    default:
                        break
                }
            }
        }
        if(hasErrors){
            resetFormErrors(shipForm)
        } else{
            console.log(
                `First Name: ${FirstName}\n Last Name: ${SecondName} \n Zipcode: ${Zipcode} \n City: ${City} \n Date: ${Date} \n Email: ${Email}`
            )
        }
    })
})
function verifyFormData(FirstName, SecondName, Zipcode, City, Date, Email){
    let errors = []
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
        return errors
    }
function resetFormErrors(shipForm){
    let formElements = shipForm.addEventListener("input", function(e){
        console.log("input detected")
        e.target.classList.remove("input-error")
    })
}

