// creating an object for storing the ecommerce website product details


// const product = [

//     {
//  pname : "ChestGuard",
//     rating : 5,
//     price : 20,
//     details :  " this chestguard is made from string fibers and is very durable"
//     },
//     {
//          pname : "MotorGuard",
//     rating : 4.5,
//     price : 80,
//     details :  " this motorguard is made from string fibers and is very durable"
//     }
// ]

// console.log(product);
// console.log(typeof product);
// console.log(typeof product[0].rating);
// console.log(typeof product[1].details);


// question no : 2
// Ask a user to enter a marks between 0-100 and based on it provide the grade for the student

// let marks = parseInt(prompt("enter a marks between  0 - 100"));
// let grade;


// if(marks>100 || marks<0 || isNaN(marks))
// {
//     window.alert("This is not valid bro.");
// }
// else if(marks >=90 && marks <= 100)
// {
//     grade = "A+";
// }
// else if(marks>=80 && marks<90)
// {
//     grade = "A";
// }
// else if(marks>=70 && marks<80)
// {
//     grade = "B+";
// }
// else if(marks>=60 && marks < 70)
// {
//     grade = "B";
// }
// else{
//     grade = "NG"
// }
// if(grade !== undefined)
// {
// console.log("according to your marks. Your grade is : ",grade);
// }


// practice unary opeartors

// let a = 5;
// let b = 6;
// console.log("a =", a + " " + "b = ",b);

// console.log("a++ =",a++);
// console.log(a);

// console.log("++a = ", ++a);

// console.log("a-- = ", a--);
// console.log(a);

// console.log("--a =", --a);

// ternary operator

// let age = 25;
// let result = age >=18 ? "You can vote" : "You cannto vote";
// console.log(result);


// question no:3 check if the input number is prime or not

// function checkPrime(num)
// {
// if(isNaN(num))
// {
//     console.log("enter a valid number bro");
//     return;
// }
// else{
//     let count = 0;
// for(let i = 1 ; i<= num ;i++)
// {
//     if(num % i ==0)
//     {
//     count++;
//     }
// }
// if(count === 2)
// {
//     return num +" "+ "is a prime number";
// }
// else{
//     return num +" " + "is a composite number";
// }
// }
// }

// let num = parseInt(prompt("enter a number"));
// for(let i =1; i <= 20; i++)
// {
// console.log(checkPrime(i));
// }
 