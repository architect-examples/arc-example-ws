let url = 'ws://localhost:3333'
let main = document.getElementsByTagName('main')[0]
let msg = document.getElementById('message')

let ws = new WebSocket(url)
ws.onopen = open
ws.onclose = close
ws.onmessage = message
ws.onerror = console.log

function open() {
  let ts = new Date(Date.now()).toISOString()
  main.innerHTML = `<p><b><code>${ts} - opened</code></b></p>`
}

function close() {
  main.innerHTML = 'Closed <a href=/>reload</a>'
}

function message(e) {
  let msg = JSON.parse(e.data)
  main.innerHTML += `<p><code>${msg.text}</code></p>`
}

msg.addEventListener('keyup', function(e) {
  if (e.key == 'Enter') {
    let text = e.target.value
    e.target.value = ''
    ws.send(JSON.stringify({text}))
  }
})
