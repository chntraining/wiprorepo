const fs = require("fs");
const axios = require("axios");
const url = "https://jsonplaceholder.typicode.com/users/";
fs.promises
  .readFile("./myfilee.txt", { encoding: "utf-8" })
  .then((data) => {
    axios.get(url + data).then((resp) => {
      console.log(resp.data);
    });
  })
  .catch((error) => {
    console.log(error);
  });
