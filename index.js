const express =require('express');
const port = 8000;


const app = express();


app.listen(port,(err, req, res) => {
    if(err) {console.log(err,"Server is down");
    
}
   console.log("server is UP");
});