export default function handler(req, res) {
  const targetDate = new Date("2026-05-13");
  const today = new Date();
  const diffTime = targetDate - today;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

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
        <div class="card">📅 <b>Baltic Touriin on enää ${diffDays} päivää!</b></div>
      </body>
    </html>
  `);
}
