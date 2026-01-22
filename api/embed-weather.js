export default async function handler(req, res) {
  const html = `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
      body { margin: 0; background: #e9f0ff; display: flex; justify-content: center; align-items: center; height: 100vh; }
      iframe { border: none; width: 100%; }
    </style>
  </head>
  <body>
    <iframe src="/weather" onload="resizeIframe(this)"></iframe>
    <script>
      function resizeIframe(iframe) {
        setInterval(() => {
          iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 'px';
        }, 500);
      }
    </script>
  </body>
  </html>`;
  res.setHeader("Content-Type", "text/html");
  res.status(200).send(html);
}
// Päivitys testiksi

