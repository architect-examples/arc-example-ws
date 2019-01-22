let arc = require('@architect/functions')

exports.handler = async function ws(event) {

  let ts = new Date(Date.now()).toISOString()
  let connectionId = event.requestContext.connectionId
  let message = JSON.parse(event.body)
  let response = {text: `${ts} - ${message.text}`}

  await arc.ws(event).send({
    id: connectionId,
    payload: response
  })

  return {statusCode: 200}
}
