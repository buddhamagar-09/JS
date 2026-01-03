// function getData(dataId, callback)
// {
//    setTimeout(() => {
//     console.log("data",dataId);
//     if(callback)
//     {
//         callback();
//     }
//    },2000);
// }

// getData(1,() => {
//     console.log("getting data 2");
//     getData(2, () => {
//           console.log("getting data 3");
//         getData(3,() => {
//               console.log("getting data 4");
//             getData(4);
//         });
//     });
// });
// // callback hell
// // solution to callback hell is promises
// // promise is a object which may produce a single value in future
// // states of promise : pending , fulfilled , rejected
// // producer and consumer of promise
// // producer is the one who creates the promise
// // consumer is the one who uses the promise
// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let error = false;

//         if (error) {
//             reject("Error occurred");
//         } else {
//             resolve("Data received");
//         }
//     }, 2000);
// });
// promise.then((res) => {
//     console.log(res);
// }
// ).catch((err) => {
//     console.log(err);
// });

// // example of async functions
// function asyncFunc1() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data1");
//       resolve("success");
//     }, 2000);
//   });
// }

// function asyncFunc2() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data2");
//       resolve("success");
//     }, 2000);
//   });
// }
// // example of callback hell
// console.log("fetching data 1.....");
// asyncFunc1().then((res) => {
//     console.log("Fetching data 2.....");
//     asyncFunc2().then((res) => {
//         console.log(res);
//     });
// });
// // example of promise chaining
// console.log("fetching data 1.....");
// asyncFunc1().then((res) => {
//     console.log("Fetching data 2.....");
//     return asyncFunc2();
// }).then((res) => {
//     console.log(res);
// });


// // another example of promise chaining
// function getData(data) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data = ", data);
//       resolve(" data fetched succesfull");
//     },2000);
//   });
// }
// console.log("Getting data 1");
// getData(1)
//   .then((res) => {
//     console.log("Getting data 2");
//     return getData(2);
//   })
//   .then((res) => {
//     console.log("Getting data 3");
//     return getData(3);
//   })
//   .then((res) => {
//     console.log(res);
//   });



// // another example of promise chaining with 10 sec delay
//   function getData(data) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data = ", data);
//       resolve(" data fetched succesfull");
//     },10000);
//   });
// }



