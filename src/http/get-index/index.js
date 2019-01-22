exports.handler = async function http(req) {
  return {
    type: 'text/html; charset=utf8',
    body: render()
  }
}

function render() {
  return `<!doctype html>
  <html>
  <body>
  <h1>Web sockets</h1>
  <main>Loading...</main>
  <input id=message type=text placeholder="Enter message" autofocus>
  <script type=module src=/js/index.mjs></script>
  </body>
  </html>`
}
