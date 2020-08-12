const request = require('supertest');
const {
  beforeAction,
  afterAction,
} = require('../setup/_setup');
const User = require('../../api/models/User');
const BookingInfo = require('../../api/models/BookingInfo');

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
  let res = await request(api)
    .get('/public/bookcab')
    .set('Accept', /json/)
    .send({
      userid: 'someuser',
      password: 'securepassword',
      startLoc: 'Loc1',
      endLoc: 'Loc2',

    })
    .expect(200);
  expect(res.body.newBooking.userid).toBe('someuser');
  expect(res.body.newBooking.startLoc).toBe('Loc1');
  expect(res.body.newBooking.endLoc).toBe('Loc2');
  expect(res.body.newBooking.bookingId).toBeTruthy();

  // test for wrong password
  res = await request(api)
    .get('/public/cabdetails')
    .send({
      userid: 'someuser',
      password: 'wrong-password',
    }).expect(401);

  // test for missing password
  res = await request(api)
    .get('/public/cabdetails')
    .send({
      userid: 'someuser',
    }).expect(400);

  // test for unregistered user
  res = await request(api)
    .get('/public/cabdetails')
    .send({
      userid: 'unregistered-user',
      password: 'his-password',
    }).expect(400);


  await user.destroy();
  await BookingInfo.destroy({
    where: {},
    truncate: true,
  });
});

test('Booking | retrieve', async () => {
  const user1 = await User.create({
    userid: 'someuser',
    password: 'securepassword',
  });
  const book1 = await BookingInfo.create({
    userid: 'someuser',
    startLoc: 'Loc1',
    endLoc: 'Loc2',
    bookingId: 'user123',
  });
  const book2 = await BookingInfo.create({
    userid: 'someuser',
    startLoc: 'Loc3',
    endLoc: 'Loc4',
    bookingId: 'user456',
  });
  let res = await request(api)
    .get('/public/cabdetails')
    .send({
      userid: 'someuser',
      password: 'securepassword',
    }).expect(200);

  expect(res.body.bookHistory).toBeTruthy();
  expect(res.body.bookHistory.length).toBe(2);

  // test for wrong password
  res = await request(api)
    .get('/public/cabdetails')
    .send({
      userid: 'someuser',
      password: 'wrong-password',
    }).expect(401);

  // test for missing password
  res = await request(api)
    .get('/public/cabdetails')
    .send({
      userid: 'someuser',
    }).expect(400);

  // test for unregistered user
  res = await request(api)
    .get('/public/cabdetails')
    .send({
      userid: 'unregistered-user',
      password: 'his-password',
    }).expect(400);


  await user1.destroy();
  await book1.destroy();
  await book2.destroy();
});

