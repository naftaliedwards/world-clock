function updateTime() {
  // Pleasanton
  let pleasantonElement = document.querySelector("#pleasanton");
  if (pleasantonElement) {
    let pleasantonDateElement = pleasantonElement.querySelector(".date");
    let pleasantonTimeElement = pleasantonElement.querySelector(".time");
    let pleasantonTime = moment().tz("America/Pleasanton");

    pleasantonDateElement.innerHTML = pleasantonTime.format("MMMM	Do YYYY");
    pleasantonTimeElement.innerHTML = pleasantonTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  // Amsterdam
  let amsterdamElement = document.querySelector("#amsterdam");
  if (amsterdamElement) {
    let amsterdamDateElement = amsterdamElement.querySelector(".date");
    let amsterdamTimeElement = amsterdamElement.querySelector(".time");
    let amsterdamTime = moment().tz("Europe/Amsterdam");

    AmsterdamDateElement.innerHTML = amsterdamTime.format("MMMM	Do YYYY");
    amsterdamTimeElement.innerHTML = amsterdamTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}
function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
  </div>
  <a href="/">All cities</a>
  `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
