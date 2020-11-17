let $no = document.getElementById ('no')
let $yes = document.getElementById('yes')

//cách 1: thêm listener 
// $no.addEventListener('mouseover',function(){
//     alert ('không')
// })  

//cách 2: ghi đè listener
$no.onmouseover =function (){
    alert ('không')
}