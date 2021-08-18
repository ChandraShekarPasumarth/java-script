function getCube(square,number){
    var result = square * number;
    return result;

}
function getSquare(number){
    var result = number * number;

    return result;
}
console.log(getCube(getSquare(10),10));

