let fs = require('fs')
let util = require('util')
let read = util.promisify(fs.readFile)
let cache

exports.handler = async function http(req) {
  if (!cache) {
    let path = `${__dirname}/index.mjs`
    cache = await read(path, {encoding: 'utf8'})
  }
  return {
    type: 'text/javascript; charset=utf8',
    body: cache
  }
}
