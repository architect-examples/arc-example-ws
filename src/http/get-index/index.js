exports.handler = async function http(req) {
  // todo: add deployment web socket url to page as global
  return {
    type: 'text/html; charset=utf8',
    body: `<!doctype html>
<html>
<body>
<h1>Web sockets</h1>
<main>Loading...</main>
<input id=message type=text placeholder="Enter message" autofocus>
<script type=module src=/index.mjs></script>
</body>
</html>`
  }
}
