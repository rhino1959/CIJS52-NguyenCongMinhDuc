let $no = document.getElementById ('no')
let $yes = document.getElementById('yes')
let $answer = document.getElementById('answer')
let count = 0; 
//cách 1: thêm listener 
$no.addEventListener('mouseover',function(){
    count++;
    if (count<5) {
        $answer.classList.toggle('reverse') // bật tắt reverse tại nơi có class trống
    }
    else {
        $answer.style.display = "none";
        alert('Thank you')
    }
})  

//cách 2: ghi đè listener
// $no.onmouseover =function (){
//     alert ('không')
// }