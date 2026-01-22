export default async function handler(req, res) {
  const apiKey = "99255c62faf2847004536cac6258d684"; // sinun OpenWeatherMap API key
  const city = "Riga";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=fi`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod !== 200) {
      throw new Error(data.message);
    }

    const temp = Math.round(data.main.temp);
    const weather = data.weather[0].description;
    const icon = data.weather[0].icon;

    res.status(200).send(`
      <html>
        <head>
          <meta charset="utf-8"/>
          <style>
            body { font-family: sans-serif; color:#222; text-align:center; margin-top:40px; }
            .weather { font-size: 22px; }
            img { vertical-align: middle; }
          </style>
        </head>
        <body>
          <div class="weather">
            🌤️ <b>Riiassa tänään:</b> ${weather}, ${temp}°C
            <img src="https://openweathermap.org/img/wn/${icon}.png" alt="weather icon" />
          </div>
        </body>
      </html>
    `);
  } catch (error) {
    console.error("Virhe sään haussa:", error);
    res.status(500).send("Sääpalvelu ei vastaa juuri nyt 😅");
  }
}
