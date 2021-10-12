// Setup empty JS object to act as endpoint for all routes
let projectData = {};

// Require Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
//port
const port =3000;
//listen if the server is runing
app.listen(port , function(){
    console.log(`we are live now on port : ${port}`);
})

// create get end-point 
app.get('/returnData',returnData);
function returnData(request , response){
    response.send(projectData);
}

// creating post end-point
app.post('/saveData' , saveData);
function saveData(request , response){
    const data = request.body;
    projectData = {...data};
    console.log('projectData is  : ',projectData)
    response.send({}); // response to end request 
}