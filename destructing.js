//ES5
var pet = {
    name : 'blabla',
    specie: 'hamster',
    age = 1.6
};

var age = pet.age;

/*Destructing */

var {age} = pet;

console.log(age);