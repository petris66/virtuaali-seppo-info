export default async function handler(req, res) {
  const apiKey = "99255c62faf2847004536cac6258d684";
  const city = "Riga";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=fi`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    const temp = Math.round(data.main.temp);
    const weather = data.weather[0].description;
    const icon = data.weather[0].icon;

    res.status(200).send(`
      <html>
        <head>
          <meta charset="utf-8"/>
          <style>
            body {
              font-family: Arial, sans-serif;
              background-color: #f8f8f8;
              color: #222;
              text-align: center;
              margin-top: 40px;
            }
            .card {
              display: inline-block;
              background: white;
              padding: 25px 40px;
              border-radius: 10px;
              box-shadow: 0 2px 8px rgba(0,0,0,0.15);
              font-size: 22px;
            }
            img {
              vertical-align: middle;
              margin-left: 8px;
            }
          </style>
        </head>
        <body>
          <div class="card">
            🌤️ <b>Riiassa tänään:</b> ${weather}, ${temp}°C
            <img src="https://openweathermap.org/img/wn/${icon}.png" />
          </div>
        </body>
      </html>
    `);
  } catch (error) {
    res.status(500).send("Virhe sään haussa");
  }
}
