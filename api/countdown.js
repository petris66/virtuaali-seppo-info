<!DOCTYPE html>
<html lang="fi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Baltic Tour -päivälaskuri</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f5f7ff;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
      margin: 0;
      color: #0a2a82;
    }
    .card {
      background: white;
      border-radius: 12px;
      box-shadow: 0 4px 8px rgba(0,0,0,0.1);
      padding: 25px 40px;
      text-align: center;
    }
    h1 {
      color: #0a2a82;
    }
  </style>
</head>
<body>
  <div class="card">
    <h1>📅 Baltic Tour 2026 -päivälaskuri</h1>
    <p id="countdown"></p>
  </div>

  <script>
    const targetDate = new Date("2026-05-13");
    const countdownEl = document.getElementById("countdown");

    function updateCountdown() {
      const now = new Date();
      const diff = targetDate - now;
      const days = Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
      countdownEl.textContent = `Baltic Touriin on enää ${days} päivää!`;
    }

    updateCountdown();
    setInterval(updateCountdown, 60 * 60 * 1000); // Päivitä kerran tunnissa
  </script>
</body>
</html>
