// Date: 07/17/2024
// By: Pe Te El
// Password validation
let pass, upcase, digitexist

if (confirm("Do you want to create a password")){
    pass = prompt("Create a password")
    upcase = /[A-Z]/.test(pass)
    digitexist = /\d/.test(pass)
    if (pass.length >= 8 && upcase && digitexist){
        alert("This is a good password")
    } else{
        alert("Try creating a new password")
    }
} else {
    alert("You did not type any password")
}   
