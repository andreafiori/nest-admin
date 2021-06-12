## Docker, NestJS admin application demo

Application demo using Docker, NestJS as NodeJS backend and Angular for the frontend.

## Docker

Run the application:

  docker-compose up

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

Port: http://localhost:8000

## Testing

TODO the testing part was not part of the couse. Add tests for this app

```bash
# unit tests
$ npm run test

# unit tests in watch mode
test:watch

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Endpoints

  /api/register
  /api/login
  /api/users
  /api/users/:id
  /api/roles
  /api/roles/:id
  /api/permissions
  /api/products
  /api/orders

## Resources and packages

- [NestJS](https://nestjs.com/)
- [TypeORM](https://typeorm.io/)
- [Bcrypt](https://www.npmjs.com/package/bcrypt)
- [Class Validator](https://github.com/typestack/class-validator)
- [Class Transformer](https://www.npmjs.com/package/class-transformer)
- Passport, passport-local, passport-jwt
