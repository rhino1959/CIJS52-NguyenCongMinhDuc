class Student {
    name
    dob
    address
    constructor (name,dob,address){
        this.name=name;
        this.dob=dob;
        this.address=address;
    }
    getAge () {
        return 2020 - this.dob
    }
}
const userA = new Student ('Đức',1999,'HN')

class Admin {
    listStudent
    constructor (){
        this.listStudent=[]
    }
    addStudent (student) {
        this.listStudent.push(student)
    }
    getListStudent(){
        for (const item of this.listStudent){
            console.log(item);
            console.log('tôi tên là ' + item.name);
            console.log('tôi ' + item.getAge() + ' tuổi');
            console.log('tôi đến từ: ' + item.address);
        }
    }
}
const admin = new Admin()
admin.addStudent(userA)
admin.addStudent(new Student ('Linh',1998,'HN'))
admin.getListStudent()