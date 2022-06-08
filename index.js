const express =require('express');
const port = 8000;
const expressLayouts=require('express-ejs-layouts');
const db=require('./config/mongoose');


// firing express...
const app = express();



// middleware************************





// set up a view engine which is ejs for rendering views ...
app.set('view engine','ejs');
app.set('views','./views');

//adding express-ejs-layouts will be only one page only content will change as per every request of diff page

app.use(expressLayouts);

app.use(express.static('./assets'));
// extract style and scripts from sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);


// for connecting to route folder where we have multiple paths we use express.Router()
app.use('/',require('./routes'));



//**********************************


app.listen(port,(err, req, res) => {
    if(err) {
        console.log(err,"Server is down");
}
   console.log("server is UP");
});