// Date: 07/16/2024
// By: Pe Te El
// Pyramid building code
let input, i, j,k , stas
input = parseInt(prompt("Write a height of pyramid"))

for (i = 0; i < input; i++){
    stas = ''
    for (j = 0; j < input - i - 1; j++){
        stas +=' '
    }
    for(k = 0; k < 2 * i + 1; k++ ){
        stas += '*'
    }
    console.log(stas)
}