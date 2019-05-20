const express = require('express');
const app = express();
var bodyParser=require('body-parser');
const viewEngine=require('ejs');
const port = 8088;
app.use(bodyParser.urlencoded({extends:false}));
app.set('view engine', 'ejs');



app.post("/welcome",function (req,resp) {
    resp.send(  req.body.lastname+req.body.firstname+ " da dang ky thanh cong");


});
app.post("/demo",function (req,resp) {
    ejs.render('/demo');
});
app.get("/login",function (req,resp) {
    resp.send(req.query.name);

});
app.listen(port, () => console.log(`hello word`));
