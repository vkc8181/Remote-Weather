const express = require('express');
const app = express(); 
const bp = require('body-parser');


app.use(bp.urlencoded({extended:true}));
app.use(bp.text());

let homeData={ temp:"No data received yet", humidity: "No data received yet" };

app.get('/set-data', (req, res) => {
    res.render('espSimulator.ejs');
});

app.post('/set-data', (req, res) => {
    console.log("Post req called: "+req.body);
	let data = req.body.split('|');
	homeData.temp = Number(data[0]);
	homeData.humidity = Number(data[1]);
	// homeData = JSON.parse(req.body);
    // homeData=req.body;
	res.status(200).send(); 
    // res.render('espSimulator.ejs');
});

app.get('', (req, res) => {
    res.render( 'homepage.ejs');
});



app.get('/get-data', (req, res) => {
	console.log("get-req-called:"+homeData);
    res.status(200).send( homeData );
});

app.listen(3000,()=>{
    console.log('Runing at port: 3000');
})