const express = require('express');
const app = express(); 
const bp = require('body-parser');


app.use(bp.urlencoded({extended:true}));

let homeData={ temp:"No data received yet", humidity: "No data received yet" };

app.get('/set-data', (req, res) => {
    res.render('espSimulator.ejs');
});

app.post('/set-data', (req, res) => {
    console.log(req.body);
    homeData=req.body;
    res.render('espSimulator.ejs');
});

app.get('', (req, res) => {
    res.render( 'homepage.ejs');
});



app.get('/get-data', (req, res) => {
    res.send( homeData );
});

app.listen(3000,()=>{
    console.log('Runing at port: 3000');
})