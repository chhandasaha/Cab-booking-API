const publicRoutes = {
  'GET /user/:userid/:password': 'UserController.register',
  'GET /register/:userid/:password': 'UserController.register', // alias for GET /user
  'GET /login/:userid/:password': 'UserController.login',
  'GET /validate/:token': 'UserController.validate',
  'GET /users': 'UserController.getAll',

  'GET /bookcab': 'BookingInfoController.createBooking',
  'GET /cabdetails': 'BookingInfoController.getBooking',
};

module.exports = publicRoutes;
