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
        </style>
      </head>
      <body>
        <div class="card">📅 <b>Baltic Touriin on enää ${diffDays} päivää!</b></div>
      </body>
    </html>
  `);
}
