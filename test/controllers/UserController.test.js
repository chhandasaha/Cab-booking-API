const request = require('supertest');
const {
  beforeAction,
  afterAction,
} = require('../setup/_setup');
const User = require('../../api/models/User');

let api;

beforeAll(async () => {
  api = await beforeAction();
});

afterAll(() => {
  afterAction();
});

test('User | create', async () => {
  let res = await request(api)
    .get('/public/user')
    .send({
      userid: 'someuser',
      password: 'securepassword',
    })
    .expect(200);

  expect(res.body.user).toBeTruthy();

  const user = await User.findByPk(res.body.user.id);

  expect(user.id).toBe(res.body.user.id);
  expect(user.userid).toBe(res.body.user.userid);

  res = await request(api)
    .get('/public/user')
    .send({
      userid: 'someuser',
    })
    .expect(500);

  await user.destroy();
});

test('User | login', async () => {
  const user = await User.create({
    userid: 'someuser',
    password: 'securepassword',
  });
  // correct password login
  let res = await request(api)
    .get('/public/login')
    .send({
      userid: 'someuser',
      password: 'securepassword',
    })
    .expect(200);

  expect(res.body.token).toBeTruthy();

  expect(user).toBeTruthy();

  // wrong password
  res = await request(api)
    .get('/public/login')
    .send({
      userid: 'someuser',
      password: 'wrongpassword',
    })
    .expect(401);

  // no password
  res = await request(api)
    .get('/public/login')
    .send({
      userid: 'someuser',
    })
    .expect(400);
  // unknown user
  res = await request(api)
    .get('/public/login')
    .send({
      userid: 'someunknownuser',
    })
    .expect(400);

  await user.destroy();
});

test('User | get all (auth)', async () => {
  const user = await User.create({
    userid: 'someuser',
    password: 'securepassword',
  });

  const res2 = await request(api)
    .get('/public/users')
    .expect(200);

  expect(res2.body.users).toBeTruthy();
  expect(res2.body.users.length).toBe(1);

  await user.destroy();
});
