const publicRoutes = {
  'GET /user/:userid/:password': 'UserController.register',
  'GET /register/:userid/:password': 'UserController.register', // alias for GET /user
  'GET /login/:userid/:password': 'UserController.login',
  'GET /validate/:token': 'UserController.validate',
  'GET /users': 'UserController.getAll',
  'GET /bookcab/:userid/:password/:locA/:locB': 'UserController.getAll',
  'GET /bookhistory/:userid/:password': 'UserController.getAll',
};

module.exports = publicRoutes;
