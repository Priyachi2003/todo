const express=require("express");
const bodyParser=require("body-parser");

const app=express();
let items=[];
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.get('/',function(req,res){
   
  
    let today=new Date();
    //var CurrentDay=today.getDay();
    var options={
weekday:"long",
day:"numeric",
month:"long"
    };
    var day=today.toLocaleString("en-US",options);
    res.render("list",{KindOfDay:day,NewListItem:items});
});
app.post("/",function(req,res){
    var inp=req.body.add;
var final=items.push(inp);
    console.log(final);
    res.redirect("/");
});

app.get('/about',function(req,res){
    res.render("about");
    res.redirect("/about");
});



app.listen(3000 ,function(req,res){
    console.log("listening to server 3000");
});