let arc = require("@architect/functions");
let static = arc.http.helpers.static;
let getURL = require("./get-web-socket-url");

/**
 * renders the html app chrome
 */
exports.handler = async function http(req) {
  return {
    statusCode: 200,
    headers: { "content-type": "text/html; charset=utf8" },
    body: `<!doctype html>
<html>
<body>
<h1>Web sockets echo server demo</h1>
<main>Loading...</main>
<input id=message type=text placeholder="Enter message" autofocus>
<script>
window.WS_URL = '${getURL()}'
</script>
<script type=module src=${static("/index.mjs")}></script>
</body>
</html>`,
  };
};
