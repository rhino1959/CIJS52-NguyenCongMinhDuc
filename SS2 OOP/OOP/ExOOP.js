class Student {
    name
    dob
    address
    constructor (name,dob,address){
        this.name=name;
        this.dob=dob;
        this.address=address;
        console.log('New User: ' + name);
        console.log('Day of Birth: ' + dob);
        console.log('Address: ' + address);
        console.log('Age: ' + this.getAge())
        console.log(this);
    }
    getAge () {
        return 2020 - this.dob
    }
}
//tạo user mới gồm toàn bộ các thuộc tính của Student (chưa có giá trị)
const userA = new Student ('Đức',1999,'HN')
const userB = new Student ('Hoàng',2017,'HN')
