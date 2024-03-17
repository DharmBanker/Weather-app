 console.log("start karlo ji ");



 const API_KEY = "c6b0bb6fd5d4873396ffeabde4f1239d";

 async function fetchShowWeather()
 {
    
  
    let city = "goa";
  

    //  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
      // const responce = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
      const responce = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
  

    const data = await responce.json();
    console.log("weather data is :--> " , data);

    let newPara = document.createElement('p');
    // newPara.textContent = `${data?.main?.temp.toFixed(2)} °C`;
    newPara.textContent = `${data?.main?.humidity.toFixed(2)} °C`;

    document.body.appendChild(newPara);

  
   
 }








// console.log("start karlo ji ");

// const API_KEY = "c6b0bb6fd5d4873396ffeabde4f1239d";

// async function fetchShowWeather() {
//     // Get the city name from the input field
//     let cityInput = document.getElementById('cityInput');
//     let city = cityInput.value;

//     // Check if the city name is provided
//     if (!city) {
//         console.error("Please enter a city name.");
//         return;
//     }

//     const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);

//     // Check if the request was successful
//     if (!response.ok) {
//         console.error(`Error: ${response.status} - ${response.statusText}`);
//         return;
//     }

//     const data = await response.json();
//     console.log("weather data is :--> ", data);

//     // Display the temperature on the webpage
//     let temperaturePara = document.getElementById('temperaturePara');
//     if (!temperaturePara) {
//         temperaturePara = document.createElement('p');
//         temperaturePara.id = 'temperaturePara';
//         document.body.appendChild(temperaturePara);
//     }

//     temperaturePara.textContent = `${data?.main?.temp.toFixed(2)} °C`;
// }

// Call the function when needed, for example, when a button is clicked
// Example HTML: <button onclick="fetchShowWeather()">Get Weather</button>












/*
  // Replace 'YOUR_API_KEY' with your actual OpenWeatherMap API key
  const apiKey = 'c6b0bb6fd5d4873396ffeabde4f1239d';
  // Replace with the actual city name you're interested in
  const cityName = 'gandhinagar';

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

  // Make a GET request to the OpenWeatherMap API
  fetch(apiUrl)
    .then(response => {
      // Check if the request was successful (status code 200-299)
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      // Parse the response JSON
      return response.json();
    })
    .then(data => {
        // Handle the weather data from the API
        const temperatureCelsius = data.main.temp - 273.15;
        const weatherDataElement = document.getElementById('weatherData');
        weatherDataElement.innerHTML = `
          <p>City: ${data.name}</p>
          <p>Temperature: ${temperatureCelsius.toFixed(2)} °C</p>
          <p>Description: ${data.weather[0].description}</p>
        `;
      })
    .catch(error => {
      // Handle any errors that occurred during the fetch
      console.error('Fetch error:', error);
    });
    */










const userTab = document.querySelector("[data-userWeather]") // your weatheer 
const searchTab = document.querySelector("[data-searchWeather]") // search weather 
const userContainer = document.querySelector(".weather-container");

const grantAccessContainer = document.querySelector(".grant-location-container");
const searchForm = document.querySelector("[data-searchForm]");
const loadingScreen = document.querySelector(".loading-container");
const userInfoContainer = document.querySelector(".user-info-container");


let oldTab = userTab;
const API_KEY = "c6b0bb6fd5d4873396ffeabde4f1239d";
oldTab.classList.add("current-tab");
gerfromSessionStorage();


function switchTab(newTab)
{
    if(newTab != oldTab)
    {
        oldTab.classList.remove("current-tab");
        oldTab = newTab;
        oldTab.classList.add("current-tab");

        if(!searchForm.classList.contains("active"))
        {
            // shu search form invisible che if yes make it visible 
            userInfoContainer.classList.remove("active");
            grantAccessContainer.classList.remove("active");
            searchForm.classList.add("active");
        }
    }

    else
    {
        // hu search ma hato have hu weather tab ma chu 
        searchForm.classList.remove("active");
        userInfoContainer.classList.remove("active");
        // have hu your weather tab ma chu to weather display kare de , so let's check locol storage 
        // if save then show
        gerfromSessionStorage();
    }
}

userTab.addEventListener("click",()=>{
    switchTab(userTab);
});


searchTab.addEventListener("click",()=>{
    switchTab(searchTab);
});

// checked if cordinate are already present in session storage
function gerfromSessionStorage()
{
    const localCoordinates = sessionStorage.getItem("user-coordinates")
    if(!localCoordinates)
    {
        grantAccessContainer.classList.add("active");
    }
    else
    {
        const cordinate = JSON.parse(localCoordinates);
        fetchUserWeatherInfo(cordinate);

    }
}

async function fetchUserWeatherInfo(cordinate)
{
    const {lat , lon } = cordinate;
    //  make grantcontaibner invisible 
    grantAccessContainer.classList.remove("active");
    // make it visible 
    loadingScreen.classList.add("active");


    //  api calling 
    try
    {
        const responce = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);

        const data = await responce.json();

        loadingScreen.classList.remove("active");
        userInfoContainer.classList.add("active");

        renderWeatherInfo(data);

    }
    catch(err)
    {
    loadingScreen.classList.remove("active");
    }
}

function renderWeatherInfo(WeatherInfo)
{
    // fetching the needed eliments 

    const cityName = document.querySelector("[data-cityName]");
    const countryIcon = document.querySelector("[data-contryIcons]");
    const desc = document.querySelector("[data-weatherdecs]");
    const weatherIcon = document.querySelector("[data-weatherIcon]");
    const temp = document.querySelector("[ data-temp]");
    const windSpeed = document.querySelector("[data-windSpeed]");
    const humidity = document.querySelector("[data-humidity]");
    const cloudiness = document.querySelector("[data-cloudiness]");
    
    console.log(WeatherInfo);

    //  fetch the values and put in the UI 
    cityName.innerText = WeatherInfo?.name;
    countryIcon.src = `https://flagcdn.com/144x108/${WeatherInfo?.sys?.country.toLowerCase()}.png`;
    desc.innerText = WeatherInfo?.weather?.[0]?.description;
    weatherIcon.src = `http://openweathermap.org/img/w/${WeatherInfo?.weather?.[0]?.icon}.png`;
    temp.innerText = `${WeatherInfo?.main?.temp} °C`;
    windSpeed.innerText = `${WeatherInfo?.wind?.speed} m/s`;
    humidity.innerText = `${WeatherInfo?.main?.humidity}%`;
    cloudiness.innerText = `${WeatherInfo?.clouds?.all}%`;



}

function getLocation() {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else {
        //HW - show an alert for no gelolocation support available
    }
}
function showPosition(position) {

    const userCoordinates = {
        lat: position.coords.latitude,
        lon: position.coords.longitude,
    }

    sessionStorage.setItem("user-coordinates", JSON.stringify(userCoordinates));
    fetchUserWeatherInfo(userCoordinates);

}

const grantAccessButton = document.querySelector("[data-grantAccess]");
grantAccessButton.addEventListener("click", getLocation);

const searchInput = document.querySelector("[data-searchInput]");

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let cityName = searchInput.value;

    if(cityName === "")
        return;
    else 
        fetchUserWeatherInfo(cityName);
})

async function fetchSearchWeatherInfo(city) {
    loadingScreen.classList.add("active");
    userInfoContainer.classList.remove("active");
    grantAccessContainer.classList.remove("active");

    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
          );
        const data = await response.json();
        loadingScreen.classList.remove("active");
        userInfoContainer.classList.add("active");
        renderWeatherInfo(data);
    }
    catch(err) {
        //hW
    }
}