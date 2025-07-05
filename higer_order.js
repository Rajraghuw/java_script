//forEach ---->>


// callback function for each
// forEach methoud array ke ak ak element par function ko call karta hai
// isme function ko as an argument pass karna padta hai
// isme function ko call karne ki jarurat nahi hoti hai, ye khud hi function ko call karta hai
// forEach ak high order function hai, jo ki array ke har element par function ko call karta hai


// const numbers = [1, 2, 3, 4, 5];
// numbers.forEach(function printval(value) {
//     document.write("<br>Number: " + value); //output: Number: 1, Number: 2, Number: 3, Number: 4, Number: 5
// });

// // forEach with arrow function
// numbers.forEach((value) => {
//     document.write("<br>Number with arrow function: " + value); //output: Number with arrow function: 1, Number with arrow function: 2, ...
// });


//map ---->>

// map function ak call back function hota hai jo array ke ak ak element par apply hota hai
// map function array ke har element par call hota hai aur uske return value ko new array me store karta hai
// map function ka use tab hota hai jab hume array ke har element par kuch operation karna hota hai aur uske result ko naya array me store karna hota hai

// const numbers = [1, 2, 3, 4, 5];

// numbers.map((value)=> {
//     console.log(value*value);
// })


// map return new array
// const numbers = [1, 2, 3, 4, 5];
// let squareNumbers = numbers.map((value) => {
//     return value * value;
// })

// console.log(squareNumbers); // [1, 4, 9, 16, 25]



// filter ---->>
// filter function ak call back function hota hai jo array ke ak ak element par apply hota hai
// filter function array ke har element par call hota hai aur uske return value ko new array me store karta hai
// filter function ka use tab hota hai jab hume array ke har element par kuch condition check karna hota hai aur uske result ko naya array me store karna hota hai

const numbers = [1, 2, 3, 4, 5];
let evennumbers = numbers.filter((value)=> {
    return value % 2 === 0; // even numbers
})

console.log(evennumbers); // [2, 4]

// reduce ---->>
// reduce function me 2 perameters hote hain, pehla accumulator aur dusra current value
// accumulator me previous value store hoti hai aur current value me current element store hota hai
// reduce function ka use tab hota hai jab hume array ke har element par kuch operation karna hota hai aur uske result ko single value me store karna hota hai

const numbers1 = [1, 2, 3, 4, 5];
let sum = numbers1.reduce((result,value) => {
    return result + value; // sum of all elements
})

console.log(sum); // 15