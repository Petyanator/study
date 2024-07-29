function triangleCheck(){
    s1 = parseInt(prompt("Please enter the first side measurement "))
    s2 = parseInt(prompt("Please enter the second side measurement"))
    s3 = parseInt(prompt("Please enter the third side measurement"))
    if ((s1 + s2 <= s3) ||(s2 + s3 <= s1) || (s1 + s3 <= s2)){
        alert("This is not a triangle")
    } else if( s1 == s2 && s2 == s3){
        alert("true triangle")
    } else if(s1 == s2 || s2 == s3 || s1 == s3){
        alert("There is third wheel")
    } else{
        alert("just a triangle")
    }
}
triangleCheck()