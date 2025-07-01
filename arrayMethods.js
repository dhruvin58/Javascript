// Top three methods...

// practice....

// Use map() to return the square of each number in [2, 4, 6]

// let arr = [2,4,6];
// let square = arr.map(value => value*value);
// console.log(square);

// Use filter() to return names longer than 4 characters in ["Ram", "Dhruvin", "Om", "Krishna"]

let strArr = ["Ram", "Dhruvin", "Om", "Krishna"];
let returnedValue = strArr.filter(value => value.length > 4);
console.log(returnedValue);

// Use forEach() to print "Hello, <name>" for each name in that same list

strArr.forEach(value =>
{
    console.log("Hello, "+ value);
});
