const http = require("http");
const cors = require("cors");
const { type } = require("os");
const UserAc = require("./addUser");
const URL = require("url");
const fs = require("fs");


const data = [
    { userName: "Nkechi", age: 19, gender: "Female" },
    { userName: "Jona", age: 22, gender: "Male" },
    { userName: "Grace", age: 25, gender: "Female" },
];
const myServer2 = http.createServer(function (req, res)
{
    if (req.url == "/")
    {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<h1>Welcome</h1>");
        res.end();
    } else if (req.url == "/about")
    {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<h1>About Page</h1>");
        res.end();
    } else if (req.url == "/user")
    {
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.writeHead(200, { "Content-Type": "application/json" });
        res.write(JSON.stringify(data));
        res.end();
    } else if (req.url == "/addUser?userName=ben&age=15")
    {
        const newUrl = URL.parse(req.url, true);
        const params = newUrl.query;
        let u_name = params.userName;
        let u_age = params.age;
        UserAc(u_name, u_age);
        res.end("record added");
    } else if (req.url.startsWith("/addNewUser"))
    {
        const newUrl = URL.parse(req.url, true);
        const params = newUrl.query;
        let userName = params.userName;
        let age = params.age;
        UserAc(userName, age);
        res.end("record added successfully!");
    } 
    
    //Start of Assignment

      else if (req.url == "/getUser")
    {
      res.setHeader("Access-Control-Allow-Origin", "*");

      fs.readFile("datasource.json", "utf8", (err, data) => {
        if (err) {
          console.error(err);
          res.writeHead(500, { "Content-Type": "text/plain" });
          res.end("Internal Server Error");
        } else {
          // Send the content as JSON
          res.writeHead(200, { "Content-Type": "application/json" });
          res.write(data);
          res.end();
        }
      });

      //end of Assignment

    } else if (req.url == "/contact")
    {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<h1>Contact Page</h1>");
        res.end();
    } else
    {
        res.writeHead(404, { "Content-Type": "text/html" });

        res.end();
    }
});

myServer2.listen(2100, function () { });
