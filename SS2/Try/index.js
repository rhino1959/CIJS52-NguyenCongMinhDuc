// class OldGirlfriend {
//     name;
//     age;
//     address;
//     favorite;
//     hair;
//     weight;
//     height;

//     constructor (name,age,address,favorite,hair,weight,height){
//     this.name=name;
//     this.age=age;
//     this.address=address
//     this.favorite=favorite;
//     this.hair=hair;
//     this.weight=weight;
//     this.height=height;
//     console.log (this)
// }}
// let OldGirlfriend1 = new OldGirlfriend ('Ngoc Trinh',30,'An Giang','BMW','short',40,160)

class Person {
    name;
    age;
    address;
    constructor (name,age,address){
        this.name=name;
        this.age=age;
        this.address=address
        console.log (this)
    }
    speak() {

    }
}

class Boy extends Person  {
    size;
    handsome;
    rich;

    constructor(name, age, address, size, handsome, rich){
        super(name,age,address)
        this.size=size;
        this.handsome=handsome;
        this.rich=rich;
    }
}

class Girl extends Person {
    size;
    beauty;
    good;

    constructor(name, age, address, size, beauty, good){
        super(name,age,address)
        this.size=size;
        this.beauty=beauty;
        this.good=good;
    }
}

class GoodBoy extends Boy  {
    tedious;

    constructor(name, age, address, size, handsome, rich,tedious){
        super(name, age, address, size, handsome, rich)
        this.tedious= tedious
    }   
}
class BadBoy extends Boy  {
    salty;

    constructor(name, age, address, size, handsome, rich,salty){
        super(name, age, address, size, handsome, rich)
        this.salty= salty
    }
}

class YellowBoy extends Boy  {
    payment;

    constructor(name, age, address, size, handsome, rich,payment){
        super(name, age, address, size, handsome, rich)
        this.payment= payment
    }
}
let GoodBoy1 = new GoodBoy ('Đức', 20, 'HN', 20, 10, 100, 10000 )
let BadBoy1 = new BadBoy ('Đức', 20, 'HN', 20, 10, 100, 0 )
let YellowBoy1 = new YellowBoy ('Đức', 20, 'HN', 20, 10, 100, '200k' )
let Girl1 = new Girl ('Huyền',22,'PT',90,10,100)    


