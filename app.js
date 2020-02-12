var express=require("express");
var app=express();
var bodyParser=require("body-parser");



app.set("view engine","ejs");
var campgrounds=[
    {name:"Magpie Camp",image : "https://images.unsplash.com/photo-1510312305653-8ed496efae75?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60g" },
    {name:"Salmon Creek",image : "https://images.unsplash.com/photo-1563299796-17596ed6b017?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" },
    {name:"Grantie Hill",image : "https://images.unsplash.com/photo-1487730116645-74489c95b41b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" },
    {name:"Mountain Goat's Rest",image : "https://images.unsplash.com/photo-1526491109672-74740652b963?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" },
    {name:"Magpie Camp",image : "https://images.unsplash.com/photo-1510312305653-8ed496efae75?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60g" },
    {name:"Magpie Camp",image : "https://images.unsplash.com/photo-1510312305653-8ed496efae75?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60g" },
    {name:"Magpie Camp",image : "https://images.unsplash.com/photo-1510312305653-8ed496efae75?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60g" },
    {name:"Magpie Camp",image : "https://images.unsplash.com/photo-1510312305653-8ed496efae75?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60g" },
    {name:"Magpie Camp",image : "https://images.unsplash.com/photo-1510312305653-8ed496efae75?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60g" }
   
   
    
];
app.get("/",function(req,res){
    res.render("landing.ejs");
})
app.get("/campground",function(req,res){
   
res.render("campground.ejs",{campgrounds:campgrounds});
});
app.post("/campground",function(req,res){
        var name=req.body.name;
        var image=req.body.image;
        var campground={name: name,image:image};
        campgrounds.push(campground);
        res.redirect("/campground");

});
app.get("/campground/new",function(req,res){
    res.render("new");
    
    
})

app.listen(3000,function(){
    console.log("Server has started");
})