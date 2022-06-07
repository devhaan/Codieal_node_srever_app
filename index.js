const express =require('express');
const port = 8000;

// firing express...
const app = express();


// middleware************************
// for connecting to route folder where we have multiple paths we use express.Router()
app.use('/',require('./routes'));

// set up a view engine which is ejs for rendering views ...
app.set('view.engine','ejs');
app.set('views','./views')
//**********************************


app.listen(port,(err, req, res) => {
    if(err) {
        console.log(err,"Server is down");
}
   console.log("server is UP");
});