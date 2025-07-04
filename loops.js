Student={

name:"raja",
age:22,
class:"bsc",
institude:"Cybrom",

}


document.write("Name: " + Student.name + "<br>");
document.write("Age: " + Student.age + "<br>"); 

let name = "raja raghuwanshi";

for (let i of name){                  // of ka use ham karte hai jab hame kisi string ya array ke har element ko access karna ho
    document.write(i + "<br>");
}

// in ka use objects ke liye hota hai
for (let key in Student){                // in ka use ham karte hai jab hame kisi object ke har key ko access karna ho
    document.write("key:" , key , "value:" , Student[key]);
}


for (i=0; i<=100; i++){
    if (i%2==0){
        document.write(i + " is even number <br>");
    }
}