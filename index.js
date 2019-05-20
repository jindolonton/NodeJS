const express = require('express');
const app = express();
var bodyParser=require('body-parser');
const port = 8082;

app.use(bodyParser.urlencoded({extends:false}));
//
app.get('/doi-song', function(req, res){
        res.send("hello doi song");
});
//

app.get('/phap-luat', function(req, res){
    res.send("hello phap luat");

});
app.get('/cuoi', function(req, res){
    res.send("hello cuoi");

});
app.get('/welcome', function(req, res){
    res.send("get"+req.query.name);

});
app.post('/welcome', function(req, res){
    res.send("Post"+req.body.name);

});




app.listen(port, () => console.log(`hello word`));