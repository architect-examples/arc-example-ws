@app
test-ws

@ws
# no further config required

@http
get /
get /js/:file

@tables
data
  scopeID *String
  dataID **String
  ttl TTL
