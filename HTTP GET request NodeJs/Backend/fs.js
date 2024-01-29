
const fs = require("fs"); 

const data = fs.readFileSync("Readme.txt", "utf-8"); 
console.log(data); 

const data2 = fs.readFileSync("datasource.json", "utf-8");
console.log(data);

const data3 = fs.readFileSync("datasource.json", "utf-8");
console.log(JSON.parse(data3));

//get the first name in the datasource file
const data4 = fs.readFileSync("datasource.json", "utf-8");
const newData4 = JSON.parse(data4);
console.log(newData4[0]["userName"]);
