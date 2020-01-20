// all about function in javscript
// follow Eloquent Javascript book of Marijn Haverbeke


// functions is bread and butter in Javascript programming - Eloquent Javascript

// const square = function(x) {
//     return x*x;
// }

// console.log(square(2));

// binding and scope
// var - is global and function scope
// let - is function and block scope
// const - is function and block scope but this is not changable

// const x = 10;
// if(true){
//     let y = 10;
//     var z = 20;
// }
// x = 30; //error here
// console.log(y) // error here
// console.log(z) // 20 

// nested scope

// const hummus = function(factor){
//     const ingredient = function(amount, unit, name){
//         let ingredientAmount = amount*factor;
//         if(ingredientAmount > 1){
//             unit += "s";
//         }
//         console.log(`${ingredientAmount} ${unit} ${name}`);
//     }
//     ingredient(1, "can", "chickpeas");
//     ingredient(0.25, "cup", "tahini");
//     ingredient(0.25, "cup", "lemon juice");
//     ingredient(1, "clove", "garlic");
//     ingredient(2, "tablespoon", "olive oil");
//     ingredient(0.5, "teaspoon", "cumin");
// };

// hummus(2);


// arrow function

// const power = (base, exponent) => {
//     let result = 1;
//     for(let count = 0; count < exponent; count++){
//         result *= base;
//     }
//     return result;
// };

// console.log(power(2,3)); // 8

// call stack

// function chicken(){
//     return egg();
// }
// function egg(){
//     return chicken();
// }

// console.log(chicken() + "came first"); // RangeError: maximum call stack size exceeded

// let day1 = {
//     squirrel: false,
//     events: ["work", "touched tree", "pizza", "running"]
// };

// console.log(day1.squirrel);
// let description = {
//     work: "went to work",
//     "touch tree": "Touch a tree"
// };

// describe oop with function

// function Person(name, age, salary){
//     this.name = name;
//     this.age = age;
//     this.salary = salary;
//     this.print = function (){
//         console.log(`${this.name} ${this.age} ${this.salary}`);
//     }
// }

// let person1 = new Person("phuoc", 26, 7000);
// console.log(typeof person1);
// person1.print();

// describe oop with class in ES6
class Person{
    constructor(name, age, salary){
        this.name = name;
        this.age = age;
        this.salary = salary;
  
    }
    print(){
        console.log(`${this.name} ${this.age} ${this.salary}`);
    
    }
};
let person2 = new Person("Tuyen", 24, 7000);
person2.print();
console.log(`Hello ${person2.print()}`);
