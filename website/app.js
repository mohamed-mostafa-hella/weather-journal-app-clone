/* Global Variables */
const apiKey = '&appid=8b381bc58917961755734a32411e434e';
const link = 'api.openweathermap.org/data/2.5/weather?zip='

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = (d.getMonth()+1)+'.'+ d.getDate()+'.'+ d.getFullYear();

document.getElementById('generate').addEventListener('click' , function(){
    console.log('clicked....');
    const zipCode = document.getElementById('zip').value;
    console.log(link+zipCode+apiKey);
})