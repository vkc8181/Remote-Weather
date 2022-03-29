const express = require('express');
const app = express(); 
const bp = require('body-parser');


app.use(bp.urlencoded({extended:true}));
app.use(bp.text());

// let homeData={  temp:"No data received yet",
//                 humidity: "No data received yet", 
//                 press: "No data received yet", 
//                 slPress: "No data received yet", 
//                 alt: "No data received yet", 
//                 lI: "No data received yet"
//             };
let homeData={  temp:undefined,
                humidity: undefined, 
                press: undefined, 
                slPress: undefined, 
                alt: undefined, 
                lI: undefined
            };

app.get('/set-data', (req, res) => {
    res.render('espSimulator.ejs');
});

app.post('/set-data', (req, res) => {
    console.log("Post req called: "+req.body);
	let data = req.body.split('|');
	homeData.temp = Number(data[0]);
	homeData.humidity = Number(data[1]);
	homeData.press = Number(data[2]);
	homeData.slPress = Number(data[3]);
	homeData.alt = Number(data[4]);
	homeData.lI = Number(data[5]);
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

const port = process.env.PORT||3000;

app.listen(port, ()=>{
    console.log('Runing at port: '+ port);
});