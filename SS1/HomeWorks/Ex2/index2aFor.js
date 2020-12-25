inputArray2 = [3,6,-2,-5,7,3,8,10,11]
//output = [3, -5, 7, 3, 11]
function findOddNumber(inputArr){
    let arr = []
    for (const interator of inputArr){
        //console.log(interator);
        if (interator % 2 !== 00) {
            arr.push (interator)
        }
    }
    return arr
}
console.log(findOddNumber(inputArray2));
