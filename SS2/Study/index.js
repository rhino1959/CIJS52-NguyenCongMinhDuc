//khai báo class
class Person {
    name; //khai báo thuộc tính
    age; //khai báo thuộc tính
    address; //khai báo thuộc tính
    constructor (name,age,address) {//cách 2 mới dùng
    this.name=name;
    this.age=age;
    this.address=address;
    console.log (this);
    //this là đối tượng đang được khởi tạo 

    }
    speak() { //khai báo phương thức
        console.log ('hello world')
    }
    introduce() {
        console.log (`chào mọi người, mình tên là ${this.name}, mình ${this.age} tuổi, mình quê ở ${this.address}`)
    }
}
    let name = "Đức";
    let age = 21;
    let address = "HN";
//cách 1:
//let person1 = new Person();//tạo ra thuộc tính person1
// person1.name = name;//thay đổi giá trị thuộc tính
// person1.age = age;//thay đổi giá trị thuộc tính
// person1.address = address;//thay đổi giá trị thuộc tính


//cách 2:
let person1 = new Person(name,age,address);
let person2 = new Person('a',20,'b');
let person3 = new Person('c',18,'d');

class OldGirlfriend extends Person { //kế thừa tính chất của Person với OldGirlfriend
    favorite;
    hair;
    weight;
    height;

    constructor (name,age,address,favorite,hair,weight,height){
        super (name,age,address) //kế thừa constructor của class Person, bắt buộc phải có khi kế thừa 
        this.favorite=favorite;
        this.hair=hair;
        this.weight=weight;
        this.height=height;
        // console.log (this)
    }
    getMarried (){
        console.log (`${this.name} gửi thiệp mừng cưới`)
    }
}   
let OldGirlfriend1 = new OldGirlfriend ('Ngoc Trinh',30,'An Giang','BMW','short',40,160)
OldGirlfriend1.speak()
OldGirlfriend1.introduce()
OldGirlfriend1.getMarried()
console.log (OldGirlfriend1)

class myMath {
    static sum(a, b){
        return a+b;
    }
    static substract (a,b) {
        return a-b;
    }
     multiply (a,b) {
        return a*b
    }
     divide (){
        if (b!=0) return a/b;
        return false;
    }
}
// static đặt trước một method -> không cần khởi tạo object từ class đấy 
// không có từ khóa static -> phải tạo ra đối tượng
console.log (myMath.sum(1,2));
console.log (myMath.substract(3,5));
