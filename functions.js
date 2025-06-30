// Simple function

function greet(person_name)
{
    return "hello" + person_name;
}

console.log(greet("Dhruvin Mavani"));

// functional expression

const greet = function(name)
{
    return "Hi " + name;
}

console.log(greet("Dhruvin"))

// Arrow Function..

const greet = () =>
{
    return "Hii "
}

console.log(greet())

// Factorial of a number

const fact = (n) =>
{
    let fact = 1;
    while(n > 0)
    {
        fact *= n;
        n--;
    }

    return fact;
}

console.log(fact(5));

// Fibonacci series

const Fibonacci = (n) =>
{
    let first = 0;
    let second = 1;
    let number = -1;

    while(n-2 > 0)
    {
        number = first + second;
        first = second;
        second = number;
        n--;
    }

    return number;

}

console.log(Fibonacci(5));