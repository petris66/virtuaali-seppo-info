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
          body { font-family: sans-serif; color:#222; text-align:center; margin-top:40px; }
          .countdown { font-size: 22px; }
        </style>
      </head>
      <body>
        <div class="countdown">📅 <b>Baltic Touriin on enää ${diffDays} päivää!</b></div>
      </body>
    </html>
  `);
}
