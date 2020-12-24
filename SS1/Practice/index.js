//1. Given a year, return the cetury it is in 
// function ceturyFromYear (year) {
//     return Math.ceil (year/100); //lấy trần của kết quả 
// }
// console.log(ceturyFromYear(1905));


//2. Given the string, check if it is a palindrome
//aabaa=true
//abac=false

function checkPalindrome (inputString) {
    const length=inputString.length
    for (let index=0; index < length/2; index++){
        if (inputString[index] !== inputString[length - index -1])
        {
            return false;
        }
    }
    return true
}
