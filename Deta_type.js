//Deta type in js -->
//there are ton types of deta type, (1).primitive deta type,(2).Non-premitive


//(1).Primitive deta types-->(there are 7 types of deta type)
//Number,String,Boolean,Undefined,Null,Bigint,Symbol,,,,,, *last to bigint,symbol not a use to js*



//Non premitive-->(Object)-->(collection of values)
//object are represented in curly brecket and that value of key value pairs,,
//examples-->


const Student = {
    name: "raja",
    age: 20,
    cgpa: 8.27,
}


// console.log(Student["name"]);
console.log(Student.cgpa);

//value update karne ke liye-->

Student["age"] = Student["age"]+5;
Student["name"]="raghuwanshi ji";
console.log(Student["age"]);
console.log(Student["name"]);







