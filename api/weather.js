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

    // Luodaan Suomen aikaa oleva aikaleima
    const now = new Date();
    const finnishTime = new Date(now.toLocaleString("en-US", { timeZone: "Europe/Helsinki" }));
    const dateStr = finnishTime.toLocaleDateString("fi-FI");
    const timeStr = finnishTime.toLocaleTimeString("fi-FI", { hour: "2-digit", minute: "2-digit" });

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
  padding: 18px 32px 10px 32px; /* pienempi laatikko */
  border-radius: 10px;
  border: 2px solid #e3e6eb;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.08);
  font-family: "Segoe UI", Arial, sans-serif;
  font-size: 20px;
  opacity: 0;
  animation: fadeInBounce 1.6s cubic-bezier(0.25, 0.8, 0.25, 1) forwards;
  animation-fill-mode: forwards;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

            .card:hover {
              transform: translateY(-3px);
              box-shadow: 0 6px 16px rgba(0, 102, 255, 0.25);
            }
            .timestamp {
              font-size: 14px;
              color: #555;
              margin-top: 10px;
            }
            @keyframes fadeInBounce {
              0%   { opacity: 0; transform: translateY(20px) scale(0.98); }
              60%  { opacity: 1; transform: translateY(-6px) scale(1.02); }
              80%  { transform: translateY(2px) scale(1); }
              100% { transform: translateY(0) scale(1); opacity: 1; }
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
            <div class="timestamp">Päivitetty: ${dateStr} klo ${timeStr}</div>
          </div>
        </body>
      </html>
    `);
  } catch (error) {
    res.status(500).send("Virhe sään haussa");
  }
}
