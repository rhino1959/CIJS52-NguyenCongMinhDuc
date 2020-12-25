class Animal {
    name;
    color;
    numOfLegs;
    constructor (name,color,numOfLegs){
        this.name=name;
        this.color=color;
        this.numOfLegs=numOfLegs;
    }
    eat (food){
        console.log('con ' + this.name + ' đang ăn ' + food);
    }

    isDangerous() {
        return this.numOfLegs <2 || this.numOfLegs>4
    }
}
const Dogg = new Animal ('chó', 'vàng', 4, 'cứt');
console.log(Dogg);
Dogg.eat('cứt');
console.log(Dogg.isDangerous());    
    



class Dog extends Animal {
    genres
    constructor (name,color,numOfLegs,genres) {
        super(name,color,numOfLegs)
        this.genres=genres
    }
}
const myDog = new Dog ('chó', 'vàng', 4, 'pug')
console.log(myDog);
console.log(myDog.isDangerous()); 
myDog.eat('con mèo')