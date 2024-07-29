// Date: 07/17/2024
// By: Pe Te El
// Date initializing code
let data, dots, mon, day, year
data = prompt("Please enter a date")
dots = parseInt(data.replace(/\//g, ''))
mon = Math.floor((dots) / 1000000)
day = Math.floor((dots - (mon*1000000)) / 10000)
year = Math.floor(dots - mon*1000000 - day*10000)
if (day <= 31 && mon <= 12){
    alert(`Your date is ${mon}/${day}/${year}`)
    if(year % 4 == 0){
        alert("This year is a leap year")
        if(day == 29 && mon == 2){
            alert("Congratulations!!! It's 29th February")
        }
    } else{
        alert("This year is not a leap year")
    }
} else{
    alert("You entered the wrong date")
}