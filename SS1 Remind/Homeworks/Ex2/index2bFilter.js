inputArray2 = [3,6,-2,-5,7,3,8,10,11]
//output = [3, -5, 7, 3, 11]
const result = inputArray2.filter(
    function(item){
        return item % 2 !== 0
})
console.log(result);