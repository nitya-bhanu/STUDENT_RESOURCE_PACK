//jshint esversion:6

const express = require("express");
const https = require("https");
const mongoose = require("mongoose");

const app = express();

app.set('view engine', 'ejs');

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

mongoose.connect("mongodb://localhost:27017/ezzPoolDB", { useNewUrlParser: true });

const itemsSchema = {
    companyName: String,
    customerNumber: Number,
    name: String,
    email: String
};
const Item = mongoose.model("Item", itemsSchema);


const item1 = new Item({
    companyName:"Netflix",
    customerNumber:1,
    name: "John",
    email: "100@gmail.com"
  });
  
  const defaultItems = [item1];

// app.get("/", function(req, res) {

//     Item.find({}, function(err, foundItems){
  
//       if (foundItems.length === 0) {
//         Item.insertMany(defaultItems, function(err){
//           if (err) {
//             console.log(err);
//           } else {
//             console.log("Successfully saved default items to DB.");
//           }
//         });
//       } 
//     });
//   });

// function netflix1(){
    app.get("/", function (req, res) {
        Item.find({ 'companyName': 'Netflix','customerNumber':'1' }, function (err, homies) {
            if (err) 
            {
                return handleError(err);
            }
            else 
            {
                res.render("list", {netflixListItems: homies});
            }
          });

    });
// }
function netflix2(){
    app.get("/", function (req, res) {
        Item.find({ 'companyName': 'Netflix','customerNumber':'2' }, function (err, homies) {
            if (err) 
            {
                return handleError(err);
            }
            else 
            {
                res.render("list", {netflixListItems: homies});
            }
          });
    });
}
function netflix3(){
    app.get("/", function (req, res) {
        Item.find({ 'companyName': 'Netflix','customerNumber':'3' }, function (err, homies) {
            if (err) 
            {
                return handleError(err);
            }
            else 
            {
                res.render("list", {netflixListItems: homies});
            }
          });
    });
}
function netflix4(){
    app.get("/", function (req, res) {
        Item.find({ 'companyName': 'Netflix','customerNumber':'4' }, function (err, homies) {
            if (err) 
            {
                return handleError(err);
            }
            else 
            {
                res.render("list", {netflixListItems: homies});
            }
          });
    });
}

app.post("/", function (req, res) {

    const UserName = req.body.userName;
    const UserPlatform = req.body.platformName;
    const UserEmailId = req.body.emailID;
    const UserSharedAccounts = req.body.numberOfShared;


    const item = new Item({
        companyName: UserPlatform,
        customerNumber: UserSharedAccounts,
        name: UserName,
        email: UserEmailId
    });

   item.save();
   res.redirect("/");
});

app.listen(3000, function () {
    console.log("Server started on port 3000");
});
