//NodeJS is a JS runtime for building server-side application
//Very soon we'll be setting up our own API hoested on a local port with the help of Node.

// It's also what we use when we want to program in JS outside of the browser
 
//Node is based on the V8 engine that runs JS in Chromium (the open source project that powers many browsers like Chrome, Opera, and Edge)

//That means Node will be running JS in a server environment, not a browser.

//Node has no idea what DOM is and other browser-related concepts such as prompt()
// document.querySelector(".test")

//NPM
//npm init: a way for us to manually set up package.json
//npm init -y: Faster setup

//require is specific to node and is similar to the import we've seen in React
//If you by chance debug in the browser, you'll notice that require will throw an error. 
const _ = require("lodash");
const variousBrownBears = require("./bears")
//fs comes from Node, it does not need to be npm installed
const fs = require("fs")

// const randomBear = _.sample(variousBrownBears);
// console.log(randomBear);

//first param is the relative path and name of file
//second param is what we want to write to our file
//third param is simply an err to indicate if our write to file does not work

//RESEARCH WHAT OTHER THINGS WRITEFILE CAN DO SUPPLEMENTAL LINKS AS WELL
// fs.writeFile("./file.txt", "hello world", err => {
//     if (err) {
//       console.error(err);
//     } else {
//       console.log("done");
//     }
//   });

//second param is our encoding that we need to specify - so how to read this file
//RESEARCH DIFFERENT ENCODINGS AVAILABLE 
//third param gives us access to an error if an error occurs and data is how we can access our data
//if there is no errors. data is a placeholder variable and can be named anything. Keep it semantic
// fs.readFile("./file.txt", "utf8", (err, data) => {
//     if (err) {
//       console.error(err);
//     } else {
//       console.log(data);
//     }
//   })

const pojo = {
    animal: false,
    name: "peter obvarious jones otlewski",
    password: "shenanigan174",
    hobbies: ["reading", "writing", "snowboarding", "cat petting"]
  };

  const pojoJson = JSON.stringify(pojo);

  //RESEARCH STRINGIFY
  //.stringify() is necessary for a javascript object to be written to a file -> changes from object to a JSON string.
  fs.writeFile("./file.txt", pojoJson, err => {
    /** another way to log the error message */
      if (err) throw err;
      console.log("done");
  });