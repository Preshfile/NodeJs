//File System Module - used to read a file unto a screen or into a program or write into a particular file
const fs = require("fs"); //importing and using a file system model

/*
fs.readFile('Readme.txt', function(err, data){
    console.log(data); //This output the text file content encrypted in buffer
});

*/

//Another way reading a text file

const data = fs.readFileSync("Readme.txt", "utf-8"); //This is how you display a file on a page
console.log(data); //this will output file content without encryption

const data2 = fs.readFileSync("datasource.json", "utf-8");
console.log(data);

const data3 = fs.readFileSync("datasource.json", "utf-8");
console.log(JSON.parse(data3));

//get the first name in the datasource file
const data4 = fs.readFileSync("datasource.json", "utf-8");
const newData4 = JSON.parse(data4);
console.log(newData4[0]["userName"]);
