# express-rest-api-boilerplate

> Node-Express REST API for cab booking with JWT Authentication, using SQLITE : Wednesday Solution Assignment for Backend developer role.

- authentication via [JWT](https://jwt.io/)
- routes mapping via [express-routes-mapper](https://github.com/aichbauer/express-routes-mapper)
- support for [sqlite](https://www.sqlite.org/), [mysql](https://www.mysql.com/), and [postgresql](https://www.postgresql.org/)
- linting via [eslint](https://github.com/eslint/eslint)
- integration tests running with [Jest](https://github.com/facebook/jest)
- built with [npm sripts](#npm-scripts)

## Install and Use

Clone this repository

```sh
# HTTPS
$ git clone https://github.com/chhandasaha/Cab-booking-API.git
```

then
```sh
# cd into project root
$ npm i
# start the api
$ npm start
# test the api
$ npm test
```

## Folder Structure

This Project has 4 main directories:

- api - for controllers, models, services, etc.
- config - for routes, database, etc.
- db - this is only a dir for the sqlite db, the default for NODE_ENV development
- test - using JEST

## Checkpoints met

The list of checkpoints provided by the assignment that are met
- [x] JSON API
- [x] Test with min. 80% coverage
- [x] Proper HTTP status error message
- [x] Sequelize
- [ ] DB Migration
- [x] Seed scripts
- [x] Rate limitation
- [x] Authentication (using JWT)
- [ ] Swagger documentation 
- [ ] Pagination

Note: I am aware of the idea of DB migration, Swagger documentation and API pagination, however I was not able to implement them.


## LICENSE

Boilerplate copyright MIT © Lukas Aichbauer
Repository copyright MIT © Chhanda Saha
