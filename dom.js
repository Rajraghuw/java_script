// Document object model (DOM) manipulation example
// this is use to manipulate the HTML document using JavaScript

// innerHTML is used to change the content of an HTML element


// let hedding = document.getElementById("Menhedding")
// hedding.innerHTML = "My name is raja raghuwanshi and i am a web developer. I am learning javascript and this is my first project.";

// // dir is used to display the properties of an object in the console

// let hedding2 = document.getElementsByClassName("Menhedding2");
// console.dir(hedding2);
// console.log(hedding2);

// let paragraphs = document.getElementsByTagName("p");
// console.log(paragraphs);
// console.dir(paragraphs); 

// querySelector is used to select the first element that matches the CSS selector
// querySelector me ham kisi bhi tage ka name or class name ya id name se select kar sakte hain
// querySelector node list return karta hai ;

let firstElement = document.querySelector("p");
console.dir(firstElement);


// querySelectorAll is used to select all elements that match the CSS selector
// querySelectorAll me ham kisi bhi tage ka name or class name ya id name se select kar sakte hain

let allParagraphs = document.querySelectorAll("p");
console.dir(allParagraphs);


// querySelector me class ko . ke sath access karte hai --->>>>

let firstClassElement = document.querySelector(".Menhedding2");
console.dir(firstClassElement);

// querySelector me id  ko # ke sath access karte hai --->>>>

let idElement = document.querySelector("#Menhedding");
console.dir(idElement);


// tagname ka use karke ham kisi bhi element ke tage ko print kra sakte hai 
// ye querySelectorAll pr work nhi karta hai

console.log(firstElement.tagName);
console.log(idElement.tagName);


// first child is used to select the first child of an element
let firstChild = document.querySelector(".container").firstElementChild;
console.dir(firstChild);

// last child is used to select the last child of an element
let lastChild = document.querySelector(".container").lastElementChild;
console.dir(lastChild);

// innerText is used to get the text content of an element
// iska use karke ham element ke andar ka text content ko print kra sakte hai
let games= document.querySelector(".game-list").innerText;
console.dir(games)

// innerHtML is used to get the HTML content of an element with tages
// ye hame content ke sath tages bhi return karta hai
let gamesWithTags = document.querySelector(".game-list").innerHTML;
console.dir(gamesWithTags);


//innerText vs innerHTML
// inki help se ham text ko run time par change bhi kar sakte hai 
// innerText sirf text ko change karta hai aur innerHTML tages ke sath text ko change karta hai
let changeText = document.querySelector("#firsth1");
changeText.innerText = "My name is raja raghuwanshi and i am a web developer. I am learning javascript and this is my first project.";
changeText.innerHTML = "<i>My name is raja raghuwanshi and i am a web developer. I am learning javascript and this is my first project.</i>";

// textContent is used to get the text content of an element
// ye innerText ki tarah hi work karta hai lekin ye tages ko ignore karta hai
// ye hidden element ko bhi return karta hai
let textContent = document.querySelector(".container").textContent;
console.dir(textContent);

// Quention : creat a h2 hedding element with text - "Hello Java script" .append "from cybrom student" to this text using js

let h2=document.querySelector(".h2");
console.log(h2.innerText);

h2.innerText = h2.innerText + " from cybrom student";  // 2 string ko + karne ko ham concatenation kehte hai

// Quention 2 : create 3 div with common class - "box" and add some text to each div using js

let boxes = document.querySelectorAll(".box");
console.dir(boxes);

// boxes[0].innerText = "This is a box 1";
// boxes[1].innerText = "This is a box 2";
// boxes[2].innerText = "This is a box 3";

// use for loop --->>

for (let i = 0; i < boxes.length; i++) {
    boxes[i].innerText = `this is a box ${i+1}`
}


// getAttribute is used to get the value of an attribute of an element
// isse ham kisi bhi element ke attribute ki value ko print kra sakte hai jese hamne kisi div ya kisi v node me koi class ya id ya 
// koi v attribute diya ho to uski value ko print kra sakte hai

let firstDiv = document.querySelector(".box");
firstDiv.getAttribute("class"); // isse ham class ki value ko print kra sakte hai
console.log(firstDiv.getAttribute("class"));

// setAttribute is used to set the value of an attribute of an element
// isse ham kisi bhi element ke attribute ki value ko set kar sakte hai jese hamne kisi div ya kisi v node me koi class ya id ya
// koi v attribute diya ho to uski value ko change kar sakte hai

firstDiv.setAttribute("class", "new-box"); // isse ham class ki value ko change kar sakte hai
console.log(firstDiv.getAttribute("class")); // new-box

// style is used to get the style of an element 
// style se ham kisi bhi element ke style ko change kar sakte hai or print kra sakte hai 

let firstBox = document.querySelector(".box1");
// firstBox.style.backgroundColor = "red"; // isse ham background color ko change kar sakte hai
firstBox.style.color = "white"; // isse ham text color ko change kar sakte hai
firstBox.style.height = "200px"; // isse ham width ko change kar sakte hai

console.log(firstBox.style);

// firstBox.style.visibility = "hidden"; // isse ham element ko hidden kar sakte hai


// ab hame apne html page par koi bhi element ko add karna hai to uske liye hame createElement ka use karna padega
// createElement is used to create a new element
// jese hamne div banaya hai us div me last me ak button add karna hai to uske liye pehle hame button ko creat karna padega
// createlement ki help se fir use div ke andar append karna padega 

let button = document.createElement("button") // isse ham button element ko create kar rahe hai
button.innerText = "Click Me"; // isse ham button ke andar text ko set kar rahe hai
button.setAttribute("class", "btn"); // isse ham button ke class ko set kar rahe hai
console.dir(button); // isse ham button ko console me dekh sakte hai

// ab hame is button ko kisi div ke andar append karna hai to uske liye hame appendChild ka use karna padega
let box1 = document.querySelector(".box1"); // isse ham box1 ko select kar rahe hai
box1.append(button); // isse ham button ko box1 ke andar append kar rahe hai

//####### prepend ka use ham kisi bhi element ko kisi div ke andar pehle se hi content ke pehle add karne ke liye karte hai

//####### before ka use ham tb karte hai jab hame element ko div se just pehle add karna ho 

//####### after ka use ham tb karte hai jab hame element ko div se just baad me add karna ho

//####### remove ka use ham kisi bhi element ko remove karne ke liye karte hai

//####### replaceWith ka use ham kisi bhi element ko replace karne ke liye karte hai


// Question : hame ak new css banani hai or use kisi bhi element par apply karna hai
// iske liye hame pehle css file ko create karna padega or fir us element ko access karke uspr css apply karni hai with the help of 
// ClassList.add property to add the class
// classList.remove property to remove the class

newCss = document.querySelector(".box1");

newCss.classList.add("newBox1"); // isse ham newBox1 class ko box1 ke andar add kar rahe hai

