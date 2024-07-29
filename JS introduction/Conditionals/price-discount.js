// Date: 07/17/2024
// By: Pe Te El
// Discount check and price calculation
let prod, price, disc
price = 4.99
disc = 0.8
alert("OUR NEW PRODUCT - ONLY FOR 4.99$")
if (confirm("Are you a student?")){
    alert("Congratulations, you have received a 10% discount")
    if (confirm("Do you want to make a purchase of our new product?")){
        prod = prompt("Choose an amount of product")
        prod = parseInt(prod)
        if(prod > 10){
            alert("Congratulations, you have just received a 20% discount on your next purchase")
            console.log(`Your total price is going to be ${(price * prod) * disc}`)
        } else if(prod > 0){
            console.log(`Your total price is going to be ${(price * prod)}`)
        }
    } else{
        console.log("Sorry, we take your discount")
    }
} else if (confirm("Do you want to make a purchase of our new product?")){
        prod = prompt("Choose an amount of product")
        prod = parseInt(prod)
        disc = 0.9  
        if(prod > 10){
            console.log(`Your total price is going to be ${(price * prod) * disc}`)
        } else if(prod > 0){
            console.log(`Your total price is going to be ${(price * prod)}`)
        }
}