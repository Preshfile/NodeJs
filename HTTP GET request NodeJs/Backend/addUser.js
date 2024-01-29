//file system module
const fs = require("fs");
// fs.readFile('readm.txt',function(err,data){
// console.log(data)
// })
function addUser(userName, age) {
  const dataStruc = {
    userName: null,
    age: null,
  };
  const data = fs.readFileSync("datasource.json", "utf-8");
  let newData = JSON.parse(data);
  console.log(newData);
  let prop = Object.create(dataStruc);
  prop.userName = userName;
  prop.age = age;
  newData.push(prop);
  // write
  fs.writeFileSync("datasource.json", JSON.stringify(newData));
}
module.exports = addUser;
