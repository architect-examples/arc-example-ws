/**
 * used to clean up event.requestContext.connectionId
 */
exports.handler = async function ws(event) {
  console.log('ws-disconnect called with', event)
  return {statusCode: 200}
}
