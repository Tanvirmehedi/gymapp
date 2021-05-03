const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const port = 3000;

//EXPRESS SPECIFIC STUFF
app.use("/static", express.static("static"));
app.use(express.urlencoded());

//PUG SPACIFIC STUFF
app.set("view engine", "pug"); //Set the template engine as pug
app.set("views", path.join(__dirname, "views")); //Set the directory

//ENDPOINT
app.get("/", (req, res) => {
  const peram = { title: "Gym Home Page" };
  res.status(200).render("index.pug", peram);
});

app.post('/',(req,res)=>{
  // console.log(req.body);
  nam = req.body.name
  age = req.body.age
  gender= req.body.gender
  adress= req.body.adress
  msg = req.body.msg

  let outputFileName = `Client Name is ${nam} ,client age ${age}, client gender ${gender} ,client adress ${adress} ,client message ${msg}`;

  fs.writeFileSync("output.txt",outputFileName);
  const peram = {message:"This is post message"};
  res.status(200).render("index.pug",peram);
})
// START THE SERVER
app.listen(port, () => {
  console.log(`Server Start And Port Is ${port}`);
});
