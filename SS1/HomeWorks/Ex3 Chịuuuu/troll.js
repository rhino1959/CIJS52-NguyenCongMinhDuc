let $no = document.getElementById ('no')
let $yes = document.getElementById('yes')
let $answer = document.getElementById('answer')
let count = 0; 
$no.addEventListener('mouseover',function(){
    count++;
    if (count<5) {
        $answer.classList.toggle('reverse')
    }
    else {
        $answer.style.display = "random";
        alert('I love you too')
    }
})  

