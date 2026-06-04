//  Object literals

const jsUser = {
    name: "Akshay",
    "full name": "Akshay Anand",
    age: "18",
    location: "Bihar",
    email: "akshay@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);

// Question is take a Symbol and add it to an object and print the output 

let mySymbol = Symbol("key1")

const SyOutput = {
    name: "Akshay",
    age: "18",
    location: "Bihar",
    [mySymbol]: "mykeyis1"
}

// console.log( typeof SyOutput.name);
// console.log( typeof SyOutput[mySymbol]);


const UserDetails = {
    name : "akshay",
    roll : "24",
    email : "akshay@gmail.com"
}

//console.log(UserDetails["email","roll"]);

UserDetails.college = "GLA" // add element in object

//console.log(UserDetails);

UserDetails.email = "nkanal38@gmail.com" // use to update details

// console.log(UserDetails);

delete UserDetails.email;

console.log(UserDetails);



