function showSelectedCity (event) {
    if (event.target.value === "rome") {
    let romeElement = document.querySelector("#rome")
    romeElement.innerHTML = "hello"
    }
}

let selectDropDown = document.querySelector("#citySelection");
selectDropDown.addEventListener("change", showSelectedCity)

function displayTimes(){
setInterval(function displayAtlantaTime () {
let atlantaDateElement = document.querySelector("#atlantaDate");
let atlantaTimeElement = document.querySelector("#atlantaTime")
let atlantaDate = moment().tz("America/New_York").format(" ddd. Do, MMMM YYYY")
let atlantaTime = moment().tz("America/New_York").format("hh:mm:ss")
let atlantaAM = moment().tz("America/New_York").format("A")

atlantaDateElement.innerHTML = `${atlantaDate}`;
atlantaTimeElement.innerHTML = `${atlantaTime} <small> ${atlantaAM} <small/>`
}, 1000)

setInterval(function displayCopenhagenTime () {
let copenhagenDateElement = document.querySelector("#copenhagenDate");
let copenhagenDate = moment().format(" ddd. Do, MMMM YYYY")
copenhagenDateElement.innerHTML = `${copenhagenDate}`;
let copenhagenAM = moment().tz("Europe/copenhagen").format("A");
let copenhagenTimeElement = document.querySelector("#copenhagenTime")
let copenhagenTime = moment().tz("Europe/copenhagen").format("hh:mm:ss")
copenhagenTimeElement.innerHTML = `${copenhagenTime} <small> ${copenhagenAM} <small/>`;
}, 1000)

setInterval(function displayBeijingTime () {
let beijingDateElement = document.querySelector("#beijingDate");
let beijingDate = moment().format(" ddd. Do, MMMM YYYY")
beijingDateElement.innerHTML = `${beijingDate}`;
let beijingAM = moment().tz("Asia/Hong_Kong").format("A");
let beijingTimeElement = document.querySelector("#beijingTime")
let beijingTime = moment().tz("Asia/Hong_Kong").format("hh:mm:ss")
beijingTimeElement.innerHTML = `${beijingTime} <small> ${beijingAM} <small/>`;
}, 1000)

setInterval(function displayMelbourneTime () {
let melbourneDateElement = document.querySelector("#melbourneDate");
let melbourneDate = moment().tz("Australia/Melbourne").format(" ddd. Do, MMMM YYYY")
melbourneDateElement.innerHTML = `${melbourneDate}`;
let melbourneAM = moment().tz("Australia/Melbourne").format("A");
let melbourneTimeElement = document.querySelector("#melbourneTime")
let melbourneTime = moment().tz("Australia/Melbourne").format("hh:mm:ss")
melbourneTimeElement.innerHTML = `${melbourneTime} <small> ${melbourneAM} <small/>`;
}, 1000)


setInterval(function displayHanoiTime () {
let hanoiDateElement = document.querySelector("#hanoiDate");
let hanoiDate = moment().tz("Australia/hanoi").format(" ddd. Do, MMMM YYYY")
hanoiDateElement.innerHTML = `${hanoiDate}`;
let hanoiAM = moment().tz("Australia/hanoi").format("A");
let hanoiTimeElement = document.querySelector("#hanoiTime")
let hanoiTime = moment().tz("Australia/hanoi").format("hh:mm:ss")
hanoiTimeElement.innerHTML = `${hanoiTime} <small> ${hanoiAM} <small/>`;
}, 1000)
}
displayTimes();
