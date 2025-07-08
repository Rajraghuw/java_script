let btn1 = document.querySelector("#btn1")
// e ak event object hota harama event ak object return karta hai use e se store karte hai 
// btn1.onclick = (e) => {
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
    
    
    
//     console.log("hy this is a button 1");
//     let a=20;
//     let b=25;
//     console.log(a+b);
    
// }

// let div = document.querySelector(".container")
// div.onmouseover = () => {
//     console.log("hy you are hover on this box");
    
// }


// Event listner :-> The addEventListener() method of the EventTarget interface sets up a function that will be called whenever the specified event is delivered to the target.
//Syntex:-> node.addEventListner(event,callback())
//Syntex:-> node.removeEventListner(event,callback())
// yha ham jitni bar chahe utni bar event chala sakte hai ,,


btn1.addEventListener("click", (e) => {
    console.log("this is event listner");
    console.log(e);
    console.log(e.type);
})

const btn =  () => {
    console.log("this is event1");
}

btn1.addEventListener("click", () => {
    console.log("this is event listner2");
})

btn1.removeEventListener("click",btn) // second call back function was removed

// Question : to creat a toggle button that changes the screen to dark-mode when clicked & light mode when clicked again

let Change = document.querySelector(".Change")
let mode = "light";
Change.addEventListener("click",() => {
    if (mode==="light"){
        mode="dark"
        document.querySelector("body").style.backgroundColor = "black"
    }
    else{
        mode="light"
        document.querySelector("body").style.backgroundColor = "blue"
    }
     
})




