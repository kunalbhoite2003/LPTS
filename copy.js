var express = require('express');  
const path=require('path')
var fs=require('fs');
const { response } = require('express');
var app = express();  
app.use(express.static('public')); 
app.get('/kp.png',function(req,res){
        const f_name=path.join(__dirname,"kp.png");
        const fs1=fs.statSync(f_name);
        res.writeHead(200,{
         'content-type' :'image/jpeg',
          'Content-Length':fs1.size
         })
   var read__s=fs.createReadStream(f_name)
  read__s.pipe(res);
        
}) 
app.get('kp.png',function(req,res){
      res.sendFile(__dirname+"/"+"kp.png");
})
app.get('/home.html', function (r1,res) {  
if(r1.query.username=="kunal"&&r1.query.password=="24122003")
{
   res.sendFile( __dirname+ "/" + "home.html" );  
}
else
{
const response={page_:"dsfskfal"};
  res.end(JSON.stringify(response));  
}
})  
app.get('/process_get', function (req, res) {  
response = { 
       first_name:req.query.first_name,  
       last_name:req.query.last_name  
   };  
    res.end(JSON.stringify(response));  
}) 
app.get('/about.html',function(req,res)
{
    res.sendFile(__dirname +"/"+"about.html");
})
app.get('/login.html',function(req,res)
{
    res.sendFile(__dirname +"/"+"login.html");
})
app.get('/ser.html',function(req,res)
{
    res.sendFile(__dirname +"/"+"ser.html");
})
app.get('/sign-up.html',function(req,res)
{
    res.sendFile(__dirname +"/"+"sign-up.html");
        var k=req.query.name;

     console.log('Name=%s',k);
     console.log('email=%s',req.query.email);
     console.log('Pass=',req.query.password);

})
app.get('/bus.html',function(req,res)
{
   const options = {
        root: path.join(__dirname)
    };
const file="final/bus.html";
    res.sendFile(file,options);
})
app.get('/rikshaw.html',function(req,res)
{
   const options = {
        root: path.join(__dirname)
    };
const file="final/rikshaw.html";
    res.sendFile(file,options);
})
var server = app.listen(8080, function () {  
  var host = server.address().address  
  var port = server.address().port  
  console.log("Example app listening at http://%s:%s", host, port,)  
  
})  