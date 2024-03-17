// const userTab = document.querySelector("[data-userWeather]") // your weatheer 
// const searchTab = document.querySelector("[data-searchWeather]") // search weather 
// const userContainer = document.querySelector(".weather-container");

// const grantAccessContainer = document.querySelector(".grant-location-container");
// const searchForm = document.querySelector("[data-searchForm]");
// const loadingScreen = document.querySelector(".loading-container");
// const userInfoContainer = document.querySelector(".user-info-container");


// let oldTab = userTab;
// const API_KEY = "c6b0bb6fd5d4873396ffeabde4f1239d";
// oldTab.classList.add("current-tab");
// gerfromSessionStorage();


// function switchTab(newTab)
// {
//     if(newTab != oldTab)
//     {
//         oldTab.classList.remove("current-tab");
//         oldTab = newTab;
//         oldTab.classList.add("current-tab");

//         if(!searchForm.classList.contains("active"))
//         {
//             // shu search form invisible che if yes make it visible 
//             userInfoContainer.classList.remove("active");
//             grantAccessContainer.classList.remove("active");
//             searchForm.classList.add("active");
//         }
//     }

//     else
//     {
//         // hu search ma hato have hu weather tab ma chu 
//         searchForm.classList.remove("active");
//         userInfoContainer.classList.remove("active");
//         // have hu your weather tab ma chu to weather display kare de , so let's check locol storage 
//         // if save then show
//         gerfromSessionStorage();
//     }
// }

// userTab.addEventListener("click",()=>{
//     switchTab(userTab);
// });


// searchTab.addEventListener("click",()=>{
//     switchTab(searchTab);
// });

// // checked if cordinate are already present in session storage
// function gerfromSessionStorage()
// {
//     const localCoordinates = sessionStorage.getItem("user-coordinates")
//     if(!localCoordinates)
//     {
//         grantAccessContainer.classList.add("active");
//     }
//     else
//     {
//         const cordinate = JSON.parse(localCoordinates);
//         fetchUserWeatherInfo(cordinate);

//     }
// }

// async function fetchUserWeatherInfo(cordinate)
// {
//     const {lat , lon } = cordinate;
//     //  make grantcontaibner invisible 
//     grantAccessContainer.classList.remove("active");
//     // make it visible 
//     loadingScreen.classList.add("active");


//     //  api calling 
//     try
//     {
//         const responce = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);

//         const data = await responce.json();

//         loadingScreen.classList.remove("active");
//         userInfoContainer.classList.add("active");

//         renderWeatherInfo(data);

//     }
//     catch(error)
//     {
//     loadingScreen.classList.remove("active");
//     }
// }

// function renderWeatherInfo(WeatherInfo)
// {
//     // fetching the needed eliments 

//     const cityName = document.querySelector("[data-cityName]");
//     const countryIcon = document.querySelector("[data-contryIcons]");
//     const desc = document.querySelector("[data-weatherdecs]");
//     const weatherIcon = document.querySelector("[data-weatherIcon]");
//     const temp = document.querySelector("[ data-temp]");
//     const windSpeed = document.querySelector("[data-windSpeed]");
//     const humidity = document.querySelector("[data-humidity]");
//     const cloudiness = document.querySelector("[data-cloudiness]");


//     //  fetch the values and put in the UI 
//     cityName.innerText = WeatherInfo?.name;
//     countryIcon.src = `https://flagcdn.com/144x108/${WeatherInfo?.sys?.country.toLowerCase()}.png`;
//     desc.innerText = WeatherInfo?.weather?.[0]?.description;
//     weatherIcon.src = `http://openweathermap.org/img/w/${WeatherInfo?.weather?.[0]?.icon}.png`;
//     temp.innerText = `${WeatherInfo?.main?.temp} °C`;
//     windSpeed.innerText = `${WeatherInfo?.wind?.speed} m/s`;
//     humidity.innerText = `${WeatherInfo?.main?.humidity}%`;
//     cloudiness.innerText = `${WeatherInfo?.clouds?.all}%`;



// }

// function getLocation() {
//     if(navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(showPosition);
//     }
//     else {
//         //HW - show an alert for no gelolocation support available
//     }
// }
// function showPosition(position) {

//     const userCoordinates = {
//         lat: position.coords.latitude,
//         lon: position.coords.longitude,
//     }

//     sessionStorage.setItem("user-coordinates", JSON.stringify(userCoordinates));
//     fetchUserWeatherInfo(userCoordinates);

// }

// const grantAccessButton = document.querySelector("[data-grantAccess]");
// grantAccessButton.addEventListener("click", getLocation);

// const searchInput = document.querySelector("[data-searchInput]");

// searchForm.addEventListener("submit", (e) => {
//     e.preventDefault();
//     let cityName = searchInput.value;

//     if(cityName === "")
//         return;
//     else 
//         fetchUserWeatherInfo(cityName);
// })

// async function fetchSearchWeatherInfo(city) {
//     loadingScreen.classList.add("active");
//     userInfoContainer.classList.remove("active");
//     grantAccessContainer.classList.remove("active");

//     try {
//         const response = await fetch(
//             `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
//           );
//         const data = await response.json();
//         loadingScreen.classList.remove("active");
//         userInfoContainer.classList.add("active");
//         renderWeatherInfo(data);
//     }
//     catch(err) {
//         //hW
//     }
// }



// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


const userTab = document.querySelector("[data-userWeather]");
const searchTab = document.querySelector("[data-searchWeather]");
const userContainer = document.querySelector(".weather-container");

const grantAccessContainer = document.querySelector(".grant-location-container");
const searchForm = document.querySelector("[data-searchForm]");
const loadingScreen = document.querySelector(".loading-container");
const userInfoContainer = document.querySelector(".user-info-container");

//initially vairables need????

let oldTab = userTab;
const API_KEY = "c6b0bb6fd5d4873396ffeabde4f1239d";
oldTab.classList.add("current-tab");
getfromSessionStorage();

function switchTab(newTab) {
    if(newTab != oldTab) {
        oldTab.classList.remove("current-tab");
        oldTab = newTab;
        oldTab.classList.add("current-tab");

        if(!searchForm.classList.contains("active")) {
            //kya search form wala container is invisible, if yes then make it visible
            userInfoContainer.classList.remove("active");
            grantAccessContainer.classList.remove("active");
            searchForm.classList.add("active");
        }
        else {
            //main pehle search wale tab pr tha, ab your weather tab visible karna h 
            searchForm.classList.remove("active");
            userInfoContainer.classList.remove("active");
            //ab main your weather tab me aagya hu, toh weather bhi display karna poadega, so let's check local storage first
            //for coordinates, if we haved saved them there.
            getfromSessionStorage();
        }
    }
}

userTab.addEventListener("click", () => {
    //pass clicked tab as input paramter
    switchTab(userTab);
});

searchTab.addEventListener("click", () => {
    //pass clicked tab as input paramter
    switchTab(searchTab);
});

//check if cordinates are already present in session storage
function getfromSessionStorage() {
    const localCoordinates = sessionStorage.getItem("user-coordinates");
    if(!localCoordinates) {
        //agar local coordinates nahi mile
        grantAccessContainer.classList.add("active");
    }
    else {
        const coordinates = JSON.parse(localCoordinates);
        fetchUserWeatherInfo(coordinates);
    }

}

async function fetchUserWeatherInfo(coordinates) {
    const {lat, lon} = coordinates;
    // make grantcontainer invisible
    grantAccessContainer.classList.remove("active");
    //make loader visible
    loadingScreen.classList.add("active");

    //API CALL
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
          );
        const  data = await response.json();

        loadingScreen.classList.remove("active");
        userInfoContainer.classList.add("active");
        renderWeatherInfo(data);
    }
    catch(err) {
        loadingScreen.classList.remove("active");
        //HW

    }

}

function renderWeatherInfo(weatherInfo) {
    //fistly, we have to fethc the elements 

    const cityName = document.querySelector("[data-cityName]");
    const countryIcon = document.querySelector("[data-countryIcon]");
    const desc = document.querySelector("[data-weatherDesc]");
    const weatherIcon = document.querySelector("[data-weatherIcon]");
    const temp = document.querySelector("[data-temp]");
    const windspeed = document.querySelector("[data-windspeed]");
    const humidity = document.querySelector("[data-humidity]");
    const cloudiness = document.querySelector("[data-cloudiness]");

    console.log(weatherInfo);

    //fetch values from weatherINfo object and put it UI elements
    cityName.innerText = weatherInfo?.name;
    countryIcon.src = `https://flagcdn.com/144x108/${weatherInfo?.sys?.country.toLowerCase()}.png`;
    desc.innerText = weatherInfo?.weather?.[0]?.description;
    weatherIcon.src = `http://openweathermap.org/img/w/${weatherInfo?.weather?.[0]?.icon}.png`;
    temp.innerText = `${weatherInfo?.main?.temp} °C`;
    windspeed.innerText = `${weatherInfo?.wind?.speed} m/s`;
    humidity.innerText = `${weatherInfo?.main?.humidity}%`;
    cloudiness.innerText = `${weatherInfo?.clouds?.all}%`;


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
        fetchSearchWeatherInfo(cityName);
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

// -----------------------------------------------------------
// gpt code 
// async function fetchSearchWeatherInfo(query) {
//     loadingScreen.classList.add("active");
//     userInfoContainer.classList.remove("active");
//     grantAccessContainer.classList.remove("active");

//     try {
//         let url;
//         const isCoordinates = typeof query === 'object' && query.lat && query.lon;

//         if (isCoordinates) {
//             url = `https://api.openweathermap.org/data/2.5/weather?lat=${query.lat}&lon=${query.lon}&appid=${API_KEY}&units=metric`;
//         } else {
//             url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${API_KEY}&units=metric`;
//         }

//         const response = await fetch(url);
//         const data = await response.json();
//         loadingScreen.classList.remove("active");
//         userInfoContainer.classList.add("active");
//         renderWeatherInfo(data);
//     } catch (err) {
//         // Handle error
//         console.error(err);
//     }
// }

// searchForm.addEventListener("submit", (e) => {
//     e.preventDefault();
//     let cityName = searchInput.value;

//     if (cityName === "") return;

//     // Check if the input is a coordinate object
//     const isCoordinates = cityName.includes(',') && cityName.split(',').length === 2;
    
//     if (isCoordinates) {
//         const [lat, lon] = cityName.split(',').map(coord => parseFloat(coord));
//         fetchSearchWeatherInfo({ lat, lon });
//     } else {
//         fetchSearchWeatherInfo(cityName);
//     }
// });
