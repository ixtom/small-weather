const weather = document.getElementById("weather");

async function sendweather() {
    const cityselect = document.getElementById("can citites");
    const selectedcity = cityselect.options[cityselect.selectedIndex];
    const city = selectedcity.value;
    const latitude = selectedcity.dataset.lat;
    const longitude = selectedcity.dataset.lon;

    weather.innerHTML = '<h1>Loading...</h1>';

    try {

        const url =
            `https://api.open-meteo.com/v1/forecast` +
            `?latitude=${latitude}` +
            `&longitude=${longitude}` +
            `&current=temperature_2m,wind_speed_10m` +
            `&temperature_unit=celsius` +
            `&wind_speed_unit=kmh` +
            `&timezone=auto`;

        const response = await fetch(url);
        const data = await response.json();

        const temperature = data.current.temperature_2m;
        const wind = data.current.wind_speed_10m;
        const timezone = data.timezone_abbreviation;

        weather.innerHTML = `
            <h1>${city}</h1>

            <p>Temperature: ${temperature} °C</p>

            <p>Wind: ${wind} km/h</p>

            <p>Timezone: ${timezone}</p>
        `;

    } catch (error) {

        console.error(error);

        weather.innerHTML =
            "Unable to retrieve weather data.";
    }
}