const express= require('express')
const bodyParser= require('body-parser')

 const app = express()
 app.set('view engine', 'ejs');
 app.use(bodyParser.urlencoded({extended:true}))
 var items=["buy food","cook food","eat food"];

 app.get('/', function(req,res){
     var today = new Date();
    //var currentday = today.getDay();
    //var currentDate= today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDay();
    //currentTime= today.getMinutes();
     
     var options= {
         weekday:"long",
         day:"numeric",
         month:"long"};
     var day=today.toLocaleDateString('en-Us',options);
     //instead of using switch to get current day lets use localeDateString
    res.render("list", {kindOfDay:day,newItemList:items});
    
 }); 
 app.post('/',function(req,res){
    var item= req.body.newItem
    // console.log(item);
    items.push(item);

     res.redirect("/");

    

 })
 app.listen(3000, function(){
     console.log('app opened on port 3000');
 })
  