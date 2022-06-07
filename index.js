const express =require('express');
const port = 8000;

// firing express...
const app = express();


// middleware************************
// for connecting to route folder where we have multiple paths we use express.Router()
app.use('/',require('./routes'));
//**********************************


app.listen(port,(err, req, res) => {
    if(err) {
        console.log(err,"Server is down");
}
   console.log("server is UP");
});