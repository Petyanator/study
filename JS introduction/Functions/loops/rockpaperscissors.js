function rockpaperscissors(){
    res1 = 0
    res2 = 0
    res3 = 0
    while(true){
        choice1 = prompt("Try to win in Rock Paper Scissors")
        if (choice1 === "exit") {
            alert(`Thanks for playing! Won: ${res3}  Draw: ${res2} Lost: ${res1}`);
            break;
        }
        choice2 = Math.floor((Math.random() * 3) + 1)
        switch(choice2){
            case 1:
                choice2 = "rock"
                break
            case 2:
                choice2 = "paper"
                break
            case 3:
                choice2 = "scissors"
                break
        }
        if(isNaN(choice1) == false){
            switch(parseInt(choice1)){
                case 1:
                    choice1 = "rock"
                    break
                case 2:
                    choice1 = "paper"
                    break
                case 3:
                    choice1 = "scissors"
                    break
                default:
                    alert("Invalid input")
                    continue
            }
        }
        if(choice1 == "rock" || choice1 == "paper" || choice1 == "scissors"){
            if(choice1 == "rock"){
                if(choice2 == "paper"){
                    alert(`You lost. You picked ${choice1} and my choice was ${choice2}`)
                    res1++
                } else if(choice2 == "scissors"){
                    alert(`You won. You picked ${choice1} and my choice was ${choice2}`)
                    res3++
                } else if(choice2 == "rock"){
                    alert(`Draw. You picked ${choice1} and my choice was ${choice2}`)
                    res2++
                }
            }
            if(choice1 == "paper"){
                if(choice2 == "paper"){
                    alert(`Draw. You picked ${choice1} and my choice was ${choice2}`)
                    res2++
                } else if(choice2 == "scissors"){
                    alert(`You lost. You picked ${choice1} and my choice was ${choice2}`)
                    res1++
                } else if(choice2 == "rock"){
                    alert(`You won. You picked ${choice1} and my choice was ${choice2}`)
                    res3++
                }
            }
            if(choice1 == "scissors"){
                if(choice2 == "paper"){
                    alert(`You won. You picked ${choice1} and my choice was ${choice2}`)
                    res3++
                } else if(choice2 == "scissors"){
                    alert(`Draw. You picked ${choice1} and my choice was ${choice2}`)
                    res2++
                } else if(choice2 == "rock"){
                    alert(`You lost. You picked ${choice1} and my choice was ${choice2}`)
                    res1++
                }
            }
        }
    }
}
rockpaperscissors()