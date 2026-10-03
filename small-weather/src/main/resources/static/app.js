async function sendweather(city, latitude, longitude) {

    const weather = document.getElementById("weather");

    weather.innerHTML = '<h1>Loading...  <i class="fa-solid fa-spinner fa-spin-pulse"></i></h1>';

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
            <div style="">
            <h1>${city}</h1>
            <p>Temperature: ${temperature} °C</p>
            <p>Wind: ${wind} km/h</p>
            <p>Timezone: ${timezone}</p>
            </div>
        `;

    } catch (error) {

        console.error(error);

        weather.innerHTML =
            `<h1>UHHH OH</h1>
            <p>Unable to retrieve weather data.</p>`;

    }
}