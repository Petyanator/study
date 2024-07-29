let grade = parseInt(prompt("Enter your grade score"))

function gradeMeasure(input){
    if (isFinite(input)){
        if (input <= 100 && input >= 90){
            console.log("Congratulations!!! You are very smart, you have received A")
        } else if (input <= 89 && input >= 80){
            console.log("Congratulations, You are smart, you have received B")
        } else if (input <= 79 && input >= 70){
            console.log("Congratulations, You are smart but need to study a little bit more, you have received C")
        } else if (input <= 69 && input >= 60){
            console.log("Damn, you have received D")
        } else if (input <= 59 && input >=0){
            console.log("Congratulations, You are the honored one, You have received F")    
            
        }
    } else {
        alert("Enter a valid number")
    }
}
gradeMeasure(grade)
