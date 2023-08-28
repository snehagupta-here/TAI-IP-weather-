const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=';
 let btn = document.querySelector('button');
 let inp = document.querySelector('input');
// let cloud_pct = document.querySelector('#cloud_pct');
// let feels_like = document.querySelector('#feels_like');
// let humidity = document.querySelector('#humidity');
// let max_temp= document.querySelector('#max_temp');
// let min_temp = document.querySelector('#min_temp');
// let sunrise = document.querySelector('#sunrise');
// let sunset = document.querySelector('#sunset');
// let temp = document.querySelector('#temp');
// let wind_degrees = document.querySelector('#wind_degrees');
// let wind_speed = document.querySelector('#wind_speed');

submit.addEventListener('click', (event)=>{
//   let  city = inp.value;
  event.preventDefault();
     getresult(city.value);
//  state.innerHTML = city;
//  cloud_pct.innerText = result.cloud_pct;
//  feels_like.innerText = result.feels_like;
//  humidity.innerText = result.humidity;
//  max_temp.innerHTML = result.max_temp;
//  min_temp.innerHTML = result.min_temp;
//  sunrise.innerHTML = result.sunrise;
//  sunset.innerHTML = result.sunset;
//  temp.innerHTML = result.temp;
//  wind_degrees.innerHTML = result.wind_degrees;
//  wind_speed.innerHTML = result.wind_speed;
})
d1.addEventListener('click',(event)=>{
    event.preventDefault();
    getresult('Dehradun');
})
d2.addEventListener('click',(event)=>{
    event.preventDefault();
    getresult('Chandigarh');
})
d3.addEventListener('click',(event)=>{
    event.preventDefault();
    getresult('Switzerland');
})
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '02b6a443b1msh38357c5cbc98216p11d59cjsn137dcfd42381',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};
function getresult(city)
{    
    state.innerHTML = city;

    fetch(url+city,options)
    .then((response)=>{
        // console.log(response);
       return  response.json();
    })
    .then((result)=>{
        console.log(result);
        state.innerHTML = city;
        cloud_pct.innerText = result.cloud_pct;
        feels_like.innerText = result.feels_like;
        humidity.innerText = result.humidity;
        max_temp.innerHTML = result.max_temp;
        min_temp.innerHTML = result.min_temp;
             temp2.innerHTML = result.temp;
        sunset.innerHTML = result.sunset;
        temp.innerHTML = result.temp;
        wind_degrees.innerHTML = result.wind_degrees;
        wind_speed.innerHTML = result.wind_speed;
        wind.innerHTML = result.wind_speed;
        humidity2.innerHTML = result.humidity;
    })
    .catch((error)=>{
        console.log(error);
    })
}
 function getone(citi){
        fetch(url+citi,options)
        .then((response)=>{
            return response.json();
        })
        .then((result)=>{
            console.log(result);
                s1.innerHTML = result.cloud_pct;
                s2.innerText = result.feels_like;
                s3.innerText = result.humidity;
                s4.innerHTML = result.max_temp;
                s5.innerHTML = result.min_temp;
                s6.innerHTML = result.sunset;
                s7.innerHTML = result.temp;
                s8.innerHTML = result.wind_degrees;
                s9.innerHTML = result.wind_speed;              
        })
        .catch((e)=>{
            console.log(e);
        })
}
function gettwo(citi){
    fetch(url+citi,options)
    .then((response)=>{
        return response.json();
    })
    .then((result)=>{
        console.log(result);
            s11.innerHTML = result.cloud_pct;
            s12.innerText = result.feels_like;
            s13.innerText = result.humidity;
            s14.innerHTML = result.max_temp;
            s15.innerHTML = result.min_temp;
            s16.innerHTML = result.sunset;
            s17.innerHTML = result.temp;
            s18.innerHTML = result.wind_degrees;
            s19.innerHTML = result.wind_speed;              
    })
    .catch((e)=>{
        console.log(e);
    })
}
function getthree(citi){
    fetch(url+citi,options)
    .then((response)=>{
        return response.json();
    })
    .then((result)=>{
        console.log(result);
            s21.innerHTML = result.cloud_pct;
            s22.innerText = result.feels_like;
            s23.innerText = result.humidity;
            s24.innerHTML = result.max_temp;
            s25.innerHTML = result.min_temp;
            s26.innerHTML = result.sunset;
            s27.innerHTML = result.temp;
            s28.innerHTML = result.wind_degrees;
            s29.innerHTML = result.wind_speed;              
    })
    .catch((e)=>{
        console.log(e);
    })
}
function getfour(citi){
    fetch(url+citi,options)
    .then((response)=>{
        return response.json();
    })
    .then((result)=>{
        console.log(result);
            s31.innerHTML = result.cloud_pct;
            s32.innerText = result.feels_like;
            s33.innerText = result.humidity;
            s34.innerHTML = result.max_temp;
            s35.innerHTML = result.min_temp;
            s36.innerHTML = result.sunset;
            s37.innerHTML = result.temp;
            s38.innerHTML = result.wind_degrees;
            s39.innerHTML = result.wind_speed;              
    })
    .catch((e)=>{
        console.log(e);
    })
}


getresult('Delhi');

getone('Nepal');
gettwo('Chennai');
getthree('Uttar Pradesh');
getfour('United States');

// async function getresult(city) {
//     try {
//         const response = await fetch(url+city, options);
//          let result =   await response.json();
//          return result;
//         //  console.log(result);

//     } catch (error) {
//         console.error(error);
//     }
// }