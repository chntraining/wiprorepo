const fs = require("fs");
const axios = require("axios");
const { resolve } = require("path");
const { rejects } = require("assert");
/*
const mypromise = new Promise((resolve, reject) => {
  const randomNumber = Math.floor(Math.random() * 2);
  console.log(randomNumber);

  if (randomNumber === 0) {
    resolve();
  } else {
    reject();
  }
});
mypromise
  .then(() => {
    console.log("Success");
  })
  .catch(() => {
    console.log("Failure");
  });
*/
fs.promises
  .readFile("./myfilee.txt", { encoding: "utf-8" })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

// fs.readFile("./myfile.txt", { encoding: "utf-8" },
//     (error, data) => {
//   if (error) {
//     console.error(error);
//   } else {
//     console.log(data);
//   }
// });
