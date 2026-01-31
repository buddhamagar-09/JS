// function vowelExtract(str) {
//   let count = 0;
//   for (let i of str) {
//     if (i === "a" || i === "e" || i === "o" || i === "u" || i === "i") {
//       count++;
//     }
//   }
//   console.log(count);
// }

// vowelExtract("Hello, have a good day");


// using arrow function

// const vowelcount = (str) => {
//     let count = 0;
//     for(let char of str)
//     {
//         if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u")
//         {
//             count++;
//         }
//     }
//     console.log(count);
// }
// vowelcount("aeiou");

// for each loop for arrays

// let name = ["hero", "heroin", "hency"];

// name.forEach((value) => {
//     console.log(value);
// });


//  array methods 
// map

// let arr1 = [2,5,6,7,64,4];

// let arr2 = arr1.map((value) =>{
//   return value**2;

// })
// console.log(arr2);


// filter example

// let marks = [56,67,98,99,76,95,23,12,93];

// const toppers = marks.filter((value) => {
//   return value > 90;
// });
// console.log(toppers); //it returns the marks that is greater than 90 


// reduce example

// let n = parseInt(prompt("Enter a number"));

// let ar = [];

// for(let i =1; i <= n; i++)
// {
//   arr[i-1] = i;
// }
// const res = arr.reduce((prev,curr) => {
//   return prev + curr;
// });
// console.log(`the sum of the array is ${res}`);

// const mul = arr.reduce((prev,curr) => {
//   return prev * curr;
// });
// console.log(`the factorial is ${mul}`);


