const express = require("express")
const bodyParser = require("body-parser")
const date = require(__dirname + "/date.js")

const app = express()

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"));

app.set("view engine", "ejs")

let items = ["Node JS", "React JS", "Django"]
let workItem = []
 
app.get("/", function(req, res){
    
    day = date.getDate()

    year = date.getYear()           // For Footer
    res.render("list", {ListType: day, newListItems: items, Year: year})
})

app.post("/", (req, res) => {
    let item = req.body.todo 

    if(req.body.list === 'Work Day') {
        if(item === "") {
            res.redirect("/work")
        } else {
            workItem.push(item)
            res.redirect("/work")
        }
    } else {
        if(item === "") {
            res.redirect("/")
        } else {
            items.push(item)
            res.redirect("/")
        }
    }   
    
})

app.get("/work", (req, res) => {
    year = date.getYear()        // For Footer 
    res.render("list", {ListType: "Work Day", newListItems: workItem, Year: year})
})

app.listen(3000, function(){
    console.log("server started on port 3000")
})