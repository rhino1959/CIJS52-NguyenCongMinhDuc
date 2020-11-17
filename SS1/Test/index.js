//bài 1: dấu "\" không in ra đc, thêm một dấu nx sẽ hiển thị được
console.log (` __________________
< srsly dude, why? >
 ------------------
        \\   ^__^
         \\  (oo)\_______
            (__)\       )\\/\\
                ||----w |
                ||     ||`)

// bài 2: cho mảng a = [1,2,3,4,5,6,7,8]. không sử dụng vòng lặp, những phương thức tương tự như vòng lặp, in ra các phần tử chẵn
let a  = [1,2,3,4,5,6,7,8]
console.log (2,4,6,8) //vcl-.-

//bài 3: cho đầu vào x giá trị 0 hoặc 1. nếu không sử dụng câu điều kiện, in ra màn hình:
//nếu x=0 thì in ra 1
//nếu x=1 thì in ra 0
let b =Number (prompt ('nhập số:')) 
let c = [1,0]
console.log (c[b])


//bài 4: cho đầu vào x là 1 số. chỉ sử dụng switch...case, hãy in ra màn hình 
//nếu x=10, in ra màn hình: A+
//nếu x=9, in ra màn hình A
//nếu x=8, in ra B+
//nếu x=7, in ra B
//nếu x=6, in ra C+
//nếu x=5, in ra C

let d = Number(prompt('nhập vào x:'))
switch (d) {
    case 10:
        console.log ('A+');
        break;
    case 9:
        console.log ('A');
        break;
    case 8:
        console.log ('B+');
        break;
   case 7:
        console.log ('B');
        break;
   case 6:
        console.log ('C+');
        break;
   case 5:
        console.log ('C');
        break;
   case 10:
        console.log ('A+');
        break;
}


//bài 5: cho đầu vào x là 1 số. chỉ sử dụng switch...case, hãy in ra màn hình:
//nếu x > 10, in ra không hợp lệ 
//nếu 9 <= x <=10 in ra A+ 
//nếu 8 <= x <= 9 in ra A 
//nếu 7 <= x <= 8 in ra B+ 

let e = Number (prompt('nhập giá trị x:'))
switch (true) {
    case e>10:
        console.log ('không hợp lệ');
        break;
    case e>=9 && e<=10:
        console.log ('A+');
        break;
    case e>=8 && e<=9:
        console.log ('A');
        break;
    case e>=7 && e<=8:
        console.log ('A+');
        break;
}