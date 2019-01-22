let arc = require('@architect/functions')

/**
 * append a timestamp and echo the message back to the connectionId
 */
exports.handler = async function ws(event) {

  console.log('ws-default called with', event)

  let ts = new Date(Date.now()).toISOString()
  let connectionId = event.requestContext.connectionId
  let message = JSON.parse(event.body)
  let text = `${ts} - ${message.text}`

  await arc.ws(event).send({
    id: connectionId,
    payload: {text}
  })

  return {statusCode: 200}
}
