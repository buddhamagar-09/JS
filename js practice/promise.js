// Promise example
// const fetchData = (id) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let error = false;
//       if (error) {
//         reject("Error ocuured while fetching the data");
//       } else {
//         console.log("Fetched data = ", id);
//         resolve("result " + id);
//       }
//     }, 1000);
//   });
// };

// Using Async/Await
// Rewrite the above promise chaining using async/await syntax inside an async function.
//   const hero = async () => {
//     try {
//         console.log("Fetching data 1....");
//        await fetchData(1);
//       console.log("Fetching data 2....");
//       await fetchData(2);
//       console.log("Fetching data 3....");
//       await fetchData(3);
//     } catch (err) {
//       console.log(err);
//     }
//   };
//   hero();

// console.log("Fetching data 1....");
// fetchData(1)
//   .then((res) => {
//     console.log("Fetching data 2....");
//     return fetchData(2);
//   })
//   .then((res) => {
//     console.log("Fetching data 3....");
//     return fetchData(3);
//   })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//   Write a function square(num) that returns a Promise.

// After 1 second, it should resolve with the square of num.

// If num is not a number, it should reject with "Invalid number".

// Using Promise chaining:

// Start with 2.

// Square it → then square the result again → then square it one more time.

// Finally log the last result.

// Add .catch to handle errors.

// const square = (num) => {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             if(isNaN(num))
//             {
//                 reject("Invalid Number");
//             }
//             else{
//                 resolve(num*num);
//             }
//         },1000);
//     });
// };

// const input = 2;
// console.log("Input = ",input);

// square(input).then((res) => {
//     console.log("first square = ",res);
//     return square(res);
// }).then((res) => {
//     console.log("second square =",res);
//     return square(res);
// }).then((res) => {
//     console.log("third square =",res);
// }).catch((err) => {
//     console.log(err);
// });

// ❓ Question: Simulate a Simple Online Order Process

// You need to simulate the steps of placing an online order using Promises and Promise chaining.

// Create these functions that return Promises and resolve after 1 second each:

// placeOrder(item) → resolves "Order placed for <item>"

// processPayment(orderMsg) → resolves "Payment successful for <item>"

// shipOrder(paymentMsg) → resolves "Order shipped for <item>"

// Using Promise chaining:

// Place an order for "Laptop".

// Then process the payment.

// Then ship the order.

// Finally, log the final shipping message.

// Add .catch() to handle any possible error.

// const placeOrder = (item) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Order placed for " + item);
//     }, 1000);
//   });
// };

// const processPayment = (item) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Payment successfull for " + item);
//     }, 1000);
//   });
// };

// const shipOrder = (item) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("order shipped for " + item);
//     }, 1000);
//   });
// };

// const item = "laptop";

// placeOrder(item).then((orderMsg) => {
//     console.log(orderMsg);
//     return processPayment(item);
// }).then((paymentMsg) => {
//     console.log(paymentMsg);
//     return shipOrder(item);
// }).then((shippingMsg) =>{
//     console.log(shippingMsg);
// }).catch((err) => {
//     console.log(err);
// });

// Using Async/Await
// Rewrite the above order process using async/await syntax inside an async function.
// const aawait = async () => {
//   try {
//     const orderMsg = await placeOrder(item);
//     console.log(orderMsg);

//     const paymentMsg = await processPayment(item);
//     console.log(paymentMsg);

//     const shippingMsg = await shipOrder(item);
//     console.log(shippingMsg);
//   } catch (err) {
//     console.log(err);
//   }
// };
// aawait();
// Output:
// Order placed for Laptop
// Payment successful for Laptop
// Order shipped for Laptop
