let box = [0, 1]
let UserNum = prompt("What number do you want")
for(i = 1; i < 20; i++){
    box[i+1] = box[i] + box[i-1]
    if( i == UserNum){
        console.log(box[i-1])
    }
}
console.log(box)