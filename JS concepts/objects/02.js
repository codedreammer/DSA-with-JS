// Singleton

const UserDetails = {
    name: "akshay",
    email: "nkanal38@gmail.com",
    sem: "5th"
}
// console.log(UserDetails);

// declearning function inside a function
const RegularUser = {
    User: {
        FullDetails: {
            name: "akshay",
            usename : "akshay22"
        }
    }
}
details = {...UserDetails, ...RegularUser};
// console.log(details);

// console.log(RegularUser.User.FullDetails);

// marging object in one 

obj1 = {1: "a", 2: "b"}
obj2 = {3: "c", 4: "d"}

obj3 = {...obj1, ...obj2} // spread method

// console.log(obj3);
