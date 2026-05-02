// Hoisting
// Hoisting is JavaScript's default behavior where:

// Declarations are moved to the top of their scope
// Execution happens later line by line


let a;
let b;
let c;


a = 10;


console.log(a);
console.log(b);
console.log(c);

b = 15;

console.log(a);
console.log(b);
console.log(c);


c = 20;

console.log(a);
console.log(b);
console.log(c);







//  Hoisting with Function Declarations
// Function declarations are fully hoisted
// Can be called before definition

abc();
function abc(){
    console.log("I am a function");
    
}
