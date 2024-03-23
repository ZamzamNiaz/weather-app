const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=';
const options = {
method: 'GET',
headers: {
'X-RapidAPI-Key': '98fd28b3fdmsh8db458e9d48af2cp1f26c8jsn06daa50110eb',
'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
}
};

const getWeather =(city) =>{
    cityName.innerHTML = city
async function fetchapi() {
    try {
        const response = await fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options);
        const result = await response.json(); // Parse response as JSON

        // Access properties of result
        const cloud_pctElement = document.getElementById('cloud_pct');
        const tempElement = document.getElementById('temp');
        const feels_likeElement = document.getElementById('feels_like');
        const humidityElement = document.getElementById('humidity');
        const min_tempElement = document.getElementById('min_temp');
        const max_tempElement = document.getElementById('max_temp');
        const wind_speedElement = document.getElementById('wind_speed');
        const wind_degreesElement = document.getElementById('wind_degrees');
        const sunriseElement = document.getElementById('sunrise');
        const sunsetElement = document.getElementById('sunset');

        // Set innerHTML of elements
        
        tempElement.innerHTML = result.temp;
        feels_likeElement.innerHTML = result.feels_like;
        humidityElement.innerHTML = result.humidity;
        min_tempElement.innerHTML = result.min_temp;
        max_tempElement.innerHTML = result.max_temp;
        wind_speedElement.innerHTML = result.wind_speed;
        wind_degreesElement.innerHTML = result.wind_degrees;
        sunriseElement.innerHTML = result.sunrise;
        sunsetElement.innerHTML = result.sunset;

        console.log(result);
    } catch (error) {
        console.log(error);
    }
}
fetchapi();
}

submit.addEventListener("click",(e)=>{
    e.preventDefault()
    getWeather(city.value)
})
getWeather("Islamabad");




