//compare var/let/const

const str = 'Nguyễn Văn A';
console.log (str.length);
console.log (str.split (' ')[0]);
console.log (str.toLowerCase().includes('nguyễn'))//gán thành mảng, lấy phần tử đầu tiên

const num = 1;
const char = '1';
console.log(num === Number (char));//ép kiểu    

//array
const arr = [1,2,3,4]
arr.push (5)//thêm vào cuối
arr.unshift(0)//thêm lên đầu
arr.indexOf(4)//vị trí của phần tử 4 trong array
arr.splice(2)//xóa phần tử ở vị trí thứ 2

//object 
const students = {
    name:'Nguyễn Văn A',
    age: 18,
    submit: function() {
        console.log(('submit'));
    }
}
console.log(students.Number);
students.submit();

//arrow function 
function sum(x,y){
return x+y;
}
const sum = (x,y) => x+y
