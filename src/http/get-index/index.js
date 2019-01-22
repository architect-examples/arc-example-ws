let getURL = require('./get-web-socket-url')

/**
 * renders the html app chrome
 */
exports.handler = async function http(req) {
  return {
    type: 'text/html; charset=utf8',
    body: `<!doctype html>
<html>
<body>
<h1>Web sockets</h1>
<main>Loading...</main>
<input id=message type=text placeholder="Enter message" autofocus>
<script>
window.WS_URL = '${getURL()}'
</script>
<script type=module src=/index.mjs></script>
</body>
</html>`
  }
}
