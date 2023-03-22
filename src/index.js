
  function displayTimes() {
    // ... your existing code
    let atlantaDateElement = document.querySelector("#atlantaDate");
    let atlantaTimeElement = document.querySelector("#atlantaTime");
    let atlantaDate = moment()
      .tz("America/New_York")
      .format(" ddd. Do, MMMM YYYY");
    let atlantaTime = moment()
      .tz("America/New_York")
      .format("hh:mm:ss");
    let atlantaAM = moment().tz("America/New_York").format("A");
    atlantaDateElement.innerHTML = `${atlantaDate}`;
    atlantaTimeElement.innerHTML = `${atlantaTime} <small> ${atlantaAM} </small>`;

    //copenhagen
    let copenhagenDateElement = document.querySelector("#copenhagenDate");
    let copenhagenDate = moment().format(" ddd. Do, MMMM YYYY");
    copenhagenDateElement.innerHTML = `${copenhagenDate}`;
    let copenhagenAM = moment().tz("Europe/copenhagen").format("A");
    let copenhagenTimeElement = document.querySelector("#copenhagenTime");
    let copenhagenTime = moment()
      .tz("Europe/copenhagen")
      .format("hh:mm:ss");
    copenhagenTimeElement.innerHTML = `${copenhagenTime} <small> ${copenhagenAM} </small>`;

    //beijing
    let beijingDateElement = document.querySelector("#beijingDate");
    let beijingDate = moment().format(" ddd. Do, MMMM YYYY");
    beijingDateElement.innerHTML = `${beijingDate}`;
    let beijingAM = moment().tz("Asia/Hong_Kong").format("A");
    let beijingTimeElement = document.querySelector("#beijingTime");
    let beijingTime = moment().tz("Asia/Hong_Kong").format("hh:mm:ss");
    beijingTimeElement.innerHTML = `${beijingTime} <small> ${beijingAM} </small>`;

    //melbourne
    let melbourneDateElement = document.querySelector("#melbourneDate");
    let melbourneDate = moment()
      .tz("Australia/Melbourne")
      .format(" ddd. Do, MMMM YYYY");
    melbourneDateElement.innerHTML = `${melbourneDate}`;
    let melbourneAM = moment().tz("Australia/Melbourne").format("A");
    let melbourneTimeElement = document.querySelector("#melbourneTime");
    let melbourneTime = moment()
      .tz("Australia/Melbourne")
      .format("hh:mm:ss");
    melbourneTimeElement.innerHTML = `${melbourneTime} <small> ${melbourneAM} </small>`;

    // hanoi
    let hanoiDateElement = document.querySelector("#hanoiDate");
    let hanoiDate = moment()
      .tz("Asia/Ho_Chi_Minh")
      .format(" ddd. Do, MMMM YYYY");
    hanoiDateElement.innerHTML = `${hanoiDate}`;
    let hanoiAM = moment().tz("Asia/Ho_Chi_Minh").format("A");
    let hanoiTimeElement = document.querySelector("#hanoiTime");
    let hanoiTime = moment().tz("Asia/Ho_Chi_Minh").format("hh:mm:ss");
    hanoiTimeElement.innerHTML = `${hanoiTime} <small> ${hanoiAM} </small>`;
  }
displayTimes();
setInterval(displayTimes,1000);



function updateTime() {


}

let intervalId;
function showSelectedCity(event) {
    if (intervalId) {
        clearInterval(intervalId);
    }
    let cityTimeZone = event.target.value;
    if (cityTimeZone === "current-location") {
        cityTimeZone = moment.tz.guess()
    }

    let cityName = cityTimeZone.replace(`_`, ``).split("/")[1]
    let citiesElement = document.querySelector(".cityList");
    
    let cityEmojis = {
        'Rome': '🇮🇹',
        'Bangkok': '🇹🇭',
        'Kabul': '🇦🇫',
        'Berlin': '🇩🇪',
        'Dakar': '🇸🇳',
        'current-location': '📍',
        // Add more cities and their corresponding emojis here
    };
    
    let emoji = cityEmojis[cityName] || '📍';
    
    function updateCityTime () {
        let cityTime = moment().tz(cityTimeZone)
        citiesElement.innerHTML = 
        `<div class="row">
        <div class="col-6">
        <h2 class="cityName" >${emoji} ${cityName}</h2>
        <div class="date" >${cityTime.format(" ddd. Do, MMMM YYYY")}</div>
        </div>
        <div class="col-6">
        <div class="time">${cityTime.format("hh:mm:ss")} <small>${moment().tz(cityTimeZone).format("A")}</small></div>
        </div>
        </div>`
    }
   updateCityTime();
    intervalId = setInterval(updateCityTime, 1000);
}
let selectDropDown = document.querySelector("#citySelection");
selectDropDown.addEventListener("change", showSelectedCity)




function reloadPage() {
    location.reload();
}

let worldClockElement = document.querySelector("#worldClock");
worldClockElement.addEventListener("click", reloadPage);

