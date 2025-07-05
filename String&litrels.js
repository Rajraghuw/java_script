// let name = "raja raghuwanshi";      //double quotes
// let name = 'raja raghuwanshi';     //single quotes
// let name = `raja raghuwanshi`;      //backticks , spatial characters

// String inmutable hote hai ya ni ki unhe change nahi kiya ja sakta hai
// String ko change karne ke liye hume naya string banana padta hai

let name = "raja raghuwanshi";

let op = name[0];  //accessing the character at index 6

document.write(op);  //output: r

// Template literals

let output = `my name is ${name} and i am a student of bsc`;

document.write(output);  //output: my name is raja raghuwanshi and i am a student of bsc


// String interpolation ${expression}

let opp = `my name is ${name[0]} and  i am a student of bsc ${2+5+7}`;  //accessing the character at index 0

document.write(opp);  //output: my name is raja raghuwanshi and i am a student of bsc 14

// \n is used to create a new line in a string
// \t is used to create a tab space in a string

console.log("hy cybrom \n my name is raja raghuwanshi");  //output: hy cybrom my name is raja raghuwanshi



// String methods

let str = "raja raghuwanshi";

let newstr = str.toUpperCase();  //converts the string to uppercase
document.write(newstr);  //output: RAJA RAGHUWANSHI

// toLowerCase() converts the string to lowercase
let newstr2 = str.toLowerCase();  //converts the string to lowercase
document.write(newstr2);  //output: raja raghuwanshi

// str.trim() removes the whitespace from both ends of a string
let newstr3 = str.trim();  //removes the whitespace from both ends of a string
document.write(newstr3);  //output: raja raghuwanshi


// slice() method extracts a part of a string and returns the extracted part in a new string
let newstr4 = str.slice(0, 4);  //extracts the part of the string from index 0 to index 4
document.write(newstr4);  //output: raja

// substring() method extracts the characters from a string between two specified indices
let newstr5 = str.substring(0, 4);  //extracts the characters from the string between index 0 and index 4
document.write(newstr5);  //output: raja    

// concat() method joins two or more strings and returns the joined string
let newstr6 = str.concat(" is a student");  //joins the string with another string
document.write(newstr6);  //output: raja raghuwanshi is a student

//replace() method replaces a specified value with another value in a string
let newstr7 = str.replace("raja", "raj");  //replaces the string "raja" with "raj"
document.write(newstr7);  //output: raj raghuwanshi

//charAt() method returns the character at a specified index in a string
let newstr8 = str.charAt(0);  //returns the character at index 0
document.write(newstr8);  //output: r