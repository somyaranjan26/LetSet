const express = require("express")
const bodyParser = require("body-parser")

const app = express()

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static(__dirname + "public"))

app.set("view engine", "ejs")

let items = ["Node JS", "React JS", "Django"]
 
app.get("/", function(req, res){
     
    let today = new Date()
    let options = { weekday: "long", month: "long", day: "numeric"}

    let day = today.toLocaleDateString("en-US", options)

    res.render("list", {KindOfDay: day, newListItems: items})
})

app.post("/", (req, res) => {
    let item = req.body.todo 
    items.push(item)
    res.redirect("/")
})

app.listen(3000, function(){
    console.log("server started on port 3000")
})