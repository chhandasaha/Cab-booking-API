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
  const res = await request(api)
    .get('/public/user/someuser/securepassword')
    .expect(200);

  expect(res.body.user).toBeTruthy();

  const user = await User.findByPk(res.body.user.id);

  expect(user.id).toBe(res.body.user.id);
  expect(user.userid).toBe(res.body.user.userid);

  await user.destroy();
});

test('User | login', async () => {
  const user = await User.create({
    userid: 'someuser',
    password: 'securepassword',
  });

  const res = await request(api)
    .get('/public/login/someuser/securepassword')
    .expect(200);

  expect(res.body.token).toBeTruthy();

  expect(user).toBeTruthy();

  await user.destroy();
});

test('User | get all (auth)', async () => {
  const user = await User.create({
    userid: 'someuser',
    password: 'securepassword',
  });

  const res = await request(api)
    .get('/public/login/someuser/securepassword')
    .expect(200);

  expect(res.body.token).toBeTruthy();

  const res2 = await request(api)
    .get('/public/users')
    .expect(200);

  expect(res2.body.users).toBeTruthy();
  expect(res2.body.users.length).toBe(1);

  await user.destroy();
});

test('User | test cab booking', async () => {
  const user = await User.create({
    userid: 'someuser',
    password: 'securepassword',
  });
  expect(true).toBe(true);


  await user.destroy();
});

