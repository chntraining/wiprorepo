const fs = require("fs");
const axios = require("axios");
const url = "https://jsonplaceholder.typicode.com/users/";
// fs.promises
//   .readFile("./myfile.txt", { encoding: "utf-8" })
//   .then((data) => {
//     axios.get(url + data).then((resp) => {
//       console.log(resp.data);
//     });
//   })
//   .catch((error) => {
//     console.log(error);
//   });

const getUser = async () => {
  try {
    const data = await fs.promises.readFile("./myfile.txt", { encoding: "utf-8" });
    const data2 = await fs.promises.readFile("./myfile2.txt", { encoding: "utf-8" });
    // console.log(data);
    const userData = await axios.get(url + data);
    const userData2 = await axios.get(url + data2);
    console.log(userData.data);
    console.log(userData2.data);
  } catch (err) {
    console.log(err);
  }
};

getUser();
