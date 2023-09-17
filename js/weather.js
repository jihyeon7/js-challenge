const API_key = "652ad392d18c57b1866ff75c66da0a88";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then((data) => {
            const city = document.querySelector("#weather span:first-child");
            const weather = document.querySelector("#weather span:last-child");
            city.innerText = data.name; 
            weather.innerText = data.weather[0].main;
    });
}


function onGeoError(){
    alert("Can't find you. No weater for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);
