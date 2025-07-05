// function ka use ham kisi bhi code ko baar baar likhne se bacha sakte hai
// function ka use ham code ko modular banane ke liye bhi karte hai


function greet(name) {
    return `Hello, ${name}!`;
}
// function ko call karne ke liye hume function ka naam likhna padta hai aur parentheses me arguments pass karne padte hai
let greeting = greet("Raja");
document.write(greeting); //output: Hello, Raja!


// Arrow function
const Arrowsum = (a,b) => {
    return a + b;
    
    };

let sum = Arrowsum(5, 10);
document.write("<br>Sum: " + sum); //output: Sum: 15


