// declaring the api url as a variable to be able to get current weather.
const api = "https://fcc-weather-api.glitch.me/api/current?";

let lat = ""
let lon = "";

$(document).ready(function() {
  // making the tempUnit var a string of the capital letter c
  const tempUnit = "C";
  // delcating a var that we will later assign the value of the current temp in celcius
  let currentTempInCelcius;
  // // if the browser can support geolocation
  if (navigator.geolocation) {
    $("div.loader-container").removeClass("hide");
    // function for getting current location //
    navigator.geolocation.getCurrentPosition(function(position) {
      // console.log("getting current postion");
      // assigning the returned latitiude and longitude to their respective vars.
      const lat = "lat=" + position.coords.latitude;
      const lon = "lon=" + position.coords.longitude;
      // console.log(lat + " " + lon);
      // this will be the function that gets the weather with thi location
      getWeather(lat, lon);
    })
  } else {
    console.log("This browser doesnt support geolocation");
  }

  // on click event handler for the temperature unit to change it to F //
  $("#temp-unit").click(function() {
    const currentTempUnit = $("#temp-unit").text();
    // console.log("current temp unit: ", currentTempUnit);
    // the newTempUnit is the currentTempUnit. if celcuis then farenheit otherwise celcius.
    // const newTempUnit = currentTempUnit == "C" ? "F" : "C";
    if (currentTempUnit == "C") {
      newTempUnit = "F";
    } else {
      newTempUnit = "C";
    }
    // console.log("new temp unit: ", newTempUnit);
    $("#temp-unit").text(newTempUnit);
    if (newTempUnit == "F") {
      var fahTemp = Math.round(parseInt($("#temp").text()) * 9 / 5 + 32);
      $("#temp").text(fahTemp + " " + String.fromCharCode(176));
    } else {
      $("#temp").text(currentTempInCelsius + " " + String.fromCharCode(176));
    }
  });

  // function that will get the weather //
  function getWeather(lat, lon) {
    // this is the string that will be used to query the weather. it has the api
    // var which has the url and the lat and lon which have the current location.
    const urlString = api + lat + "&" + lon;
    // console.log("making the ajax call");
    // making an ajax request to the api.
    $.ajax({
      url: urlString, success: function(result) {
        // injects city and country into the html
        $("#city").text(result.name + ", ");
        $("#country").text(result.sys.country);
        // assigns currentTempInCelcius with a rounded temperature
        currentTempInCelsius = Math.round(result.main.temp * 10) /10;
        $("#temp").text(currentTempInCelsius + " " + String.fromCharCode(176));
        $("#temp-unit").text(tempUnit);
        $("#weather").text(result.weather[0].main);
        // console.log(result.weather[0].main);
        // runs the function that decides which icon to display
        // based on result.weather's data.
        // console.log("ajax call complete");
        setTimeout(function() {
          $(".temp-change").removeClass("hide");
        }, 500);
        $("div.loader-container").addClass("hide");
        // console.log("weather result: ", result.weather[0].main);
        iconDisplay(result.weather[0].main);
      }
    });
  }
  // pass in the weather argument for the function to make the call on the switch case.
  function iconDisplay(weather) {
    const weatherSmall = weather.toLowerCase();
    // switch case to see what icon to show depending on weather
    switch(weatherSmall) {
      case "drizzle":
        addIcon(weatherSmall)
        // console.log("changed to drizzle");
        break;
      case "clouds":
        addIcon(weatherSmall)
        // console.log("changed to cloudy");
        break;
      case "rain":
        addIcon(weatherSmall)
        // console.log("changed to rain");
        break;
      case "snow":
        addIcon(weatherSmall)
        // console.log("changed to snow");
        break;
      case "clear":
        addIcon(weatherSmall)
        // console.log("changed to clear");
        break;
      case "thunderstorm":
        addIcon(weatherSmall)
        // console.log("changed to thunderstorm");
        break;
      default:
          // console.log("nothing was changed");
    }
  }

  function addIcon(weatherSmall) {
    // console.log("weatherSmall: ", weatherSmall)
    // console.log("removing hide class from appropriate weather div");
    // the div with the matching class to the weather result remove the hide class.
    $("div." + weatherSmall).removeClass("hide");
  }
})
