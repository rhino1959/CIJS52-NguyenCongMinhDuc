let $no = document.getElementById ('no')
let $yes = document.getElementById('yes')
let $answer = document.getElementById('answer')
//cách 1: thêm listener 
$no.addEventListener('mouseover',function(){
    $answer.classList.toggle('reverse')
})  

//cách 2: ghi đè listener
// $no.onmouseover =function (){
//     alert ('không')
// }