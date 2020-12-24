function findOddNumber(inputArr){
    return inputArr.filter(num => num%2 == 0);
}

console.log(findOddNumber([3, 6, -2, -5, 7, 3, 8, 10, 11]));