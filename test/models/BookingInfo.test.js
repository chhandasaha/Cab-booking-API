const {
  beforeAction,
  afterAction,
} = require('../setup/_setup');
const BookingInfo = require('../../api/models/BookingInfo');

let mybookingInfo;

beforeAll(async () => {
  await beforeAction();
});

afterAll(() => {
  afterAction();
});

beforeEach(async () => {
  mybookingInfo = await BookingInfo.create({
    userid: 'someuser',
    startLoc: 'locA',
    endLoc: 'locB',
  });
});


test('BookingInfo is created successfully', async () => {
  const sendBookingInfo = mybookingInfo.toJSON();
  // check if mybookingInfo is created
  expect(sendBookingInfo.userid).toBe('someuser');
  expect(sendBookingInfo.startLoc).toBe('locA');
  expect(sendBookingInfo.endLoc).toBe('locB');

  await mybookingInfo.destroy();
});
