# arc-example-ws

example app using web sockets w Architect 5.x

## local demo

```bash
npm i
npx hydrate
npx sandbox 
```

# deploying to Lambda

if you want to deploy to Lambda you need to add an `@aws` entry (https://arc.codes/reference/aws) and staging and production entries for `@static` (https://arc.codes/reference/static) in `.arc`