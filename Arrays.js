//Array mutable hote hai ya ni ki unhe change kiya ja sakta hai
// Array ko change karne ke liye hume naya array banana nahi padta hai

let arr = [1, 2, 3, 4, 5]; //array declaration

arr[0] = 10; //changing the value of the first element of the array
document.write(arr); //output: 10

// Array me ham sabhi tarah ka data store kar sakte hai
let arr2 = [1, "raja", true, null, undefined, { name: "raja" }, [1, 2, 3]]; //array with different data types
document.write(arr2); //output: 1,raja,true,null,undefined,[object Object],1,2,3

// Array in for loop
for (let i = 0; i < arr2.length; i++) {
    document.write(arr2[i] + " "); //output: 1 raja true null undefined [object Object] 1,2,3 
}

// Array.length property ki help se ham array ki length ko access kar sakte hai
let length = arr2.length; //getting the length of the array
document.write("<br>Length of arr2: " + length); //output: Length of arr2: 7

// of loop
for (let value of arr2) {
    document.write(value + " "); //output: 1 raja true null undefined [object Object] 1,2,3 
}   

// toUpperCase() method is not applicable to arrays, it is used for strings
// However, we can convert each string element in the array to uppercase
let strArr = ["raja", "raghuwanshi"];

for (let name of strArr) {
    document.write(name.toUpperCase()); //converting each string element to uppercase
}

//Array methods 
// push() method adds one or more elements to the end of an array and returns the new length of the array

let arr3 = [1, 2, 3];
arr3.push(4, 5); //adding elements to the end of the array
document.write("<br>After push: " + arr3); //output: After push: 1,2,3,4,5

// pop() method removes the last element from an array and returns that element
let lastElement = arr3.pop(); //removing the last element from the array
document.write("<br>Last element removed: " + lastElement); //output: Last element removed: 5

// toString() method converts an array to a string
let arrToString = arr3.toString(); //converting the array to a string
document.write("<br>Array to string: " + arrToString); //output: Array to string: 1,2,3,4

// concat() method is used to merge two or more arrays
let arr4 = [6, 7, 8];
let mergedArray = arr3.concat(arr4); //merging arr3 and arr4
document.write("<br>Merged Array: " + mergedArray); //output: Merged Array: 1,2,3,4,6,7,8

// unshift() method adds one or more elements to the beginning of an array and returns the new length of the array
let arr5 = [9, 10];
arr5.unshift(7, 8); //adding elements to the beginning of the array 
document.write("<br>After unshift: " + arr5); //output: After unshift: 7,8,9,10

// shift() method removes the first element from an array and returns that element
let firstElement = arr5.shift(); //removing the first element from the array
document.write("<br>First element removed: " + firstElement); //output: First element removed: 7

// slice() method returns a shallow copy of a portion of an array into a new array object
let arr6 = [1, 2, 3, 4, 5];
let slicedArray = arr6.slice(1, 4); //slicing the array from index 1 to 4
document.write("<br>Sliced Array: " + slicedArray); //output: Sliced Array: 2,3,4

// splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements
// Syntax: array.splice(start, deleteCount, item1, item2, ...)
// start: The index at which to start changing the array
// deleteCount: The number of elements to remove
// item1, item2, ...: The elements to add to the array
// If no elements are specified, splice() will only remove elements from the array
// If deleteCount is 0, splice() will not remove any elements but will add new elements at the specified index

let arr7 = [1, 2, 3, 4, 5];
arr7.splice(2, 2, 6, 7); //removing 2 elements from index 2 and adding 6 and 7
document.write("<br>After splice: " + arr7); //output: After splice: 1,2,6,7,5

