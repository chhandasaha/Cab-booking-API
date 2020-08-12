const request = require('supertest');
const {
  beforeAction,
  afterAction,
} = require('../setup/_setup');
const User = require('../../api/models/User');
// const BookingInfo = require('../../api/models/BookingInfo');

let api;

beforeAll(async () => {
  api = await beforeAction();
});

afterAll(() => {
  afterAction();
});

test('Booking | create', async () => {
  const user = await User.create({
    userid: 'someuser',
    password: 'securepassword',
  });
  const res = await request(api)
    .get('/public/bookcab')
    .set('Accept', /json/)
    .send({
      userid: 'someuser',
      password: 'securepassword',
      startLoc: 'Loc1',
      endLoc: 'Loc2',

    })
    .expect(200);
  // eslint-disable-next-line
	console.log(res); 
  expect(res.body.userid).toBeTruthy();
  expect(res.body.startLoc).toBeTruthy();
  expect(res.body.endLoc).toBeTruthy();


  await user.destroy();
});

