# express-rest-api-boilerplate

> Node-Express REST API for cab booking with JWT Authentication, using SQLITE

- authentication via [JWT](https://jwt.io/)
- routes mapping via [express-routes-mapper](https://github.com/aichbauer/express-routes-mapper)
- support for [sqlite](https://www.sqlite.org/), [mysql](https://www.mysql.com/), and [postgresql](https://www.postgresql.org/)
- linting via [eslint](https://github.com/eslint/eslint)
- integration tests running with [Jest](https://github.com/facebook/jest)
- built with [npm sripts](#npm-scripts)

## Table of Contents

- [Install & Use](#install-and-use)
- [Folder Structure](#folder-structure)
- [Controllers](#controllers)
  - [Create a Controller](#create-a-controller)
- [Models](#models)
  - [Create a Model](#create-a-model)
- [Policies](#policies)
  - [auth.policy](#authpolicy)
- [Services](#services)
- [Config](#config)
  - [Connection and Database](#connection-and-database)
- [Routes](#routes)
  - [Create Routes](#create-routes)
- [Test](#test)
  - [Setup](#setup)
- [npm Scripts](#npm-scripts)

## Install and Use

Start by cloning this repository

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
- test - using [Jest](https://github.com/facebook/jest)

## Checkpoints met

The list of checkpoints provided by the assignment that are met
[] JSON API
[x] Test with min. 80% coverage
[x] Proper HTTP status error message
[x] Sequelize
[] DB Migration
[] Seed scripts
[x] Rate limitation
[x] Authentication (using JWT)
[] Swagger documentation 
[] Pagination



## LICENSE

Boilerplate copyright MIT © Lukas Aichbauer
Repository copyright MIT © Chhanda Saha
