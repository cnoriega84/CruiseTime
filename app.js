// Path to the OpenWeather API here
const api = 'http://api.openweathermap.org/data/2.5/weather';
const apiForecast = 'http://api.openweathermap.org/data/2.5/forecast'
  
  // Insert your API key here
const apiKey = 'ccdf0d0852e400f43f5af85ae2672c3a';

//the date of the trip
const date = "2023-01-22";
  
  // Change this to the city you would like to get weather data for
const cityName = 'San Diego';
const cityName1 = 'Loreto';
const cityName2 = 'La Paz';
const cityName3 = 'Cabo San Lucas';
  
  // Build the URL using the passed-in parameters
let url = `${api}?q=${cityName}&appid=${apiKey}`;
let urll = `${api}?q=${cityName1}&appid=${apiKey}`;
let urlll = `${api}?q=${cityName2}&appid=${apiKey}`;
let urllll = `${api}?q=${cityName3}&appid=${apiKey}`;
let forecastUrl = `${apiForecast}?q=${cityName}&appid=${apiKey}`;
let forecastUrll = `${apiForecast}?q=${cityName1}&appid=${apiKey}`;
let forecastUrlll = `${apiForecast}?q=${cityName2}&appid=${apiKey}`;
let forecastUrllll = `${apiForecast}?q=${cityName3}&appid=${apiKey}`;
 // Fetch the data from the given URL 

 fetch(url)
  .then(response => response.json())
  .then(data => {

    // Convert the temperature from Kelvin to Fahrenheit
    let tempFahrenheit = Math.round((data.main.temp - 273.15) * (9/5) + 32);


    // HTML elements that contain the data
    
    document.getElementById('place').innerHTML =`${data.name}`
    console.log(data.name)
    document.getElementById('temp').innerHTML = `The current temp is ${tempFahrenheit}°F in`;
    
  });



  fetch(urll)
  .then(response => response.json())
  .then(data => {

    // Convert the temperature from Kelvin to Fahrenheit
    let tempFahrenheit = Math.round((data.main.temp - 273.15) * (9/5) + 32);


    // HTML elements that contain the data
    
    document.getElementById('place1').innerHTML =`${data.name}`
    console.log(data.name)
    document.getElementById('temp1').innerHTML = `The current temp is ${tempFahrenheit}°F in`;
    
  });

  fetch(urlll)
  .then(response => response.json())
  .then(data => {

    // Convert the temperature from Kelvin to Fahrenheit
    let tempFahrenheit = Math.round((data.main.temp - 273.15) * (9/5) + 32);


    // HTML elements that contain the data
    
    document.getElementById('place2').innerHTML =`${data.name}`
    console.log(data.name)
    document.getElementById('temp2').innerHTML = `The current temp is ${tempFahrenheit}°F in`;
    
  });

  fetch(urllll)
  .then(response => response.json())
  .then(data => {

    // Convert the temperature from Kelvin to Fahrenheit
    let tempFahrenheit = Math.round((data.main.temp - 273.15) * (9/5) + 32);


    // HTML elements that contain the data
    
    document.getElementById('place3').innerHTML =`${data.name}`
    console.log(data.name)
    document.getElementById('temp3').innerHTML = `The current temp is ${tempFahrenheit}°F in`;
    
  });


  // Set the date we're counting down to
let countDownDate = new Date("Jan 22, 2023 00:00:00").getTime();

// Update the count down every 1 second
let x = setInterval(function() {
  // Get today's date and time
  let now = new Date().getTime();

  // Find the distance between now and the count down date
  let distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  // Output the result in an element with id="clock"
  document.getElementById("clock").innerHTML = days + " days " + hours + " hours "
  + minutes + " min " + seconds + " seconds ";
  
  // If the count down is over, write "Cruise Time!"
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("clock").innerHTML = "Cruise Time!";
    }
    }, 1000);




  fetch(forecastUrl)
  .then(response => response.json())
  .then(data => {
    const weatherDtls = data.list[0].weather[0];
    const temp = data.list[0].main;
    let tempFahrenheit = Math.round((temp.temp - 273.15) * (9/5) + 32);
    const date = new Date("Jan 22, 2023 00:00:00").toLocaleDateString();
    const cityName = data.city.name;
    document.getElementById("futureDate").innerHTML = `On ${date} in ${cityName} the temperature is ${tempFahrenheit}°F with ${weatherDtls.main} - ${weatherDtls.description} weather conditions.`;
  })


  fetch(forecastUrll)
  .then(response => response.json())
  .then(data => {
    const weatherDtls = data.list[0].weather[0];
    const temp = data.list[0].main;
    let tempFahrenheit = Math.round((temp.temp - 273.15) * (9/5) + 32);
    const date1 = new Date("Jan 25, 2023 00:00:00").toLocaleDateString();
    const cityName = data.city.name;
    document.getElementById("futureDate1").innerHTML = `On ${date1} in ${cityName} the temperature is ${tempFahrenheit}°F with ${weatherDtls.main} - ${weatherDtls.description} weather conditions.`;
  })

  fetch(forecastUrlll)
  .then(response => response.json())
  .then(data => {
    const weatherDtls = data.list[0].weather[0];
    const temp = data.list[0].main;
    let tempFahrenheit = Math.round((temp.temp - 273.15) * (9/5) + 32);
    const date2 = new Date("Jan 26, 2023 00:00:00").toLocaleDateString();
    const cityName = data.city.name;
    document.getElementById("futureDate2").innerHTML = `On ${date2} in ${cityName} the temperature is ${tempFahrenheit}°F with ${weatherDtls.main} - ${weatherDtls.description} weather conditions.`;
  })

  fetch(forecastUrllll)
  .then(response => response.json())
  .then(data => {
    const weatherDtls = data.list[0].weather[0];
    const temp = data.list[0].main;
    let tempFahrenheit = Math.round((temp.temp - 273.15) * (9/5) + 32);
    const date3 = new Date("Jan 27, 2023 00:00:00").toLocaleDateString();
    const cityName = data.city.name;
    document.getElementById("futureDate3").innerHTML = `On ${date3} in ${cityName} the temperature is ${tempFahrenheit}°F with ${weatherDtls.main} - ${weatherDtls.description} weather conditions.`;
  })