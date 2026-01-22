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
              color: #222;
              text-align: center;
              margin-top: 60px;
              transition: background-color 0.6s ease;
            }
            .card {
              display: inline-block;
              background: #ffffff;
              padding: 25px 45px;
              border-radius: 12px;
              border: 2px solid #e3e6eb;
              box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
              font-size: 22px;
              transition: transform 0.2s ease;
            }
            .card:hover {
              transform: translateY(-3px);
            }
            img {
              vertical-align: middle;
              margin-left: 8px;
            }
          </style>
          <script>
            const hour = new Date().getHours();
            let bg;
            if (hour >= 6 && hour < 12) bg = '#fff5e6';        // aamu
            else if (hour >= 12 && hour < 18) bg = '#f5f7fa';  // päivä
            else if (hour >= 18 && hour < 22) bg = '#e8f0ff';  // ilta
            else bg = '#f0f0f5';                               // yö
            document.addEventListener('DOMContentLoaded', () => {
              document.body.style.backgroundColor = bg;
            });
          </script>
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
