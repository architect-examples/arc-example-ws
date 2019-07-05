# arc-example-ws

Example app using web sockets w Architect 5.x.

## Local demo

```bash
npm i
npx hydrate
npx sandbox 
```

## Deploying to Lambda

If you want to deploy to Lambda you need to add an `@aws` entry (https://arc.codes/reference/aws) and staging and production entries for `@static` (https://arc.codes/reference/static) in `.arc`