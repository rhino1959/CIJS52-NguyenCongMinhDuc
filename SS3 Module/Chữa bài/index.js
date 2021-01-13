import './userCarrd.js'
class People {
    name;
    age;
    job;
    id;
    constructor(name, age, job, id) {
        this.name = name;
        this.age = age;
        this.job = job;
        this.id = id;
    }
    showinfo (){
        return `
                <user-card name="${this.name}" age= "${this.age}">  </user-card>
                `
    }
}
const dad = new People ('Dad' , 40)
console.log(dad.showinfo());
document.getElementById('app').innerHTML=dad.showinfo()
// class Family {
//     numberOfPeople;
//     address;
//     listPeople;
//     constructor(address) {
//         this.address = address;
//         this.numberOfPeople = 0;
//         this.listPeople = [];
//     }
//     showinfo () {
//         let peopleInfo = ''
//         for (const item of this.listPeople) {
//             peopleInfo += item.showinfo ()
//         }
//         return `
//         address: ${this.address}
//         Has ${this.numberOfPeople} people
//         ${peopleInfo}
//         `
//     }
//     addPeople(people) {
//         this.listPeople.push(people);
//         this.numberOfPeople++
//     }
// }

// const child = new People('Child', 5, 'student', 123)
// const dad = new People('Dad', 45, 'dev', 123)
// const mom = new People('Mom', 35, 'test', 123)
// const myFamily = new Family('22c')
// myFamily.addPeople(child);
// myFamily.addPeople(dad);
// myFamily.addPeople(mom);
// console.log(myFamily);



// class Town {
//     name; 
//     listFamily;
//     constructor (name) {
//         this.name=name;
//         this.listFamily = []
//     }
//     addFamily (Family) {
//         this.listFamily.push (Family)
//     }
//     showinfo () {
//         for (const item of this.listFamily) {
//             console.log(item.showinfo());           
//         }
//     }
// }

// const town = new Town ('Thành Công')
// town.addFamily(myFamily)
// town.showinfo()
// console.log(town);