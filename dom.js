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

// Quention : creat a h2 hedding element with text 