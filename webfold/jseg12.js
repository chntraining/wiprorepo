setTimeout(() => {
  console.log("one");
  setTimeout(() => {
    console.log("two");
    setTimeout(() => {
      console.log("three");
    }, 3000);
  }, 2000);
}, 1000);
