// const person = {
//     name : "Dhruvin",
//     age : 21,
//     city : 'surat',
// }

// console.log(person.name)
// console.log(person.age)

// const {name, age, city} = person

// console.log(name);
// console.log(age);

// function greet({name, age})
// {
//     console.log(`${name}, ${age}`);
// }

// greet(person)


// const numbers = [10,20,30];

// const [a,b,c] = numbers;

// const[first, ,third] = numbers;

// console.log(third);

// Destructure this object and print name and pin:

// const address = {
//     street: "MG Road",
//     city: "Surat",
//     pin: 395001
//   };

// const {street, city, pin} = address;

// console.log(street);
// console.log(pin);

// const colors = ["red", "green", "blue"];

// const [firstColor, secondColor, thirdColor] = colors;

const user = { username: "Dhruvin", age: 22 };

function greet({username, age})
{
    console.log(`name ${username}, age ${age}`);
}

greet(user);
