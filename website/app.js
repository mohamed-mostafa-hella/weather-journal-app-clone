/* Global Variables */
const apiKey = '&appid=8b381bc58917961755734a32411e434e';
const link = 'https://api.openweathermap.org/data/2.5/weather?zip='
const unit = '&units=metric ' //change standered unit to be celecias

const Udate = document.getElementById('date');
const Utemp = document.getElementById('temp');
const Ucontent = document.getElementById('content');

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = (d.getMonth()+1)+'-'+ d.getDate()+'-'+ d.getFullYear();

document.getElementById('generate').addEventListener('click' , function(){
    console.log('clicked....');
    const zipCode = document.getElementById('zip').value;
    const fullLink = link+zipCode+apiKey+unit;
    getData(fullLink)
    .then((returnedData)=>{
        
        let tempOpject = {};
        tempOpject.date = newDate ;
        tempOpject.temp = returnedData.main.temp;
        tempOpject.feelings = document.getElementById('feelings').value;

        postData('/saveData',tempOpject);
    })
    .then(()=>{
        return getData('/returnData');
    })
    .then((finalData)=>{
        updateUI(finalData)
    })
})

const getData = async(url)=>{
    const response = await fetch(url);
    try{
        return await response.json();
    }catch(e){
        console.log('error' , e);
    }
}

const postData = async(url = '' , data = {})=>{
    const response = await fetch(url,{
        method : 'post',
        headers : {
            'Content-Type' : 'application/json',
        },
        body : JSON.stringify(data)
    });

    try{
        return await response.json(); 
    }catch(e){
        console.log('error' , e)
    }
}

const updateUI  = (finalData)=>{
    Udate.innerHTML = finalData.date;
    Utemp.innerHTML = finalData.temp;
    Ucontent.innerHTML = finalData.feelings;
}