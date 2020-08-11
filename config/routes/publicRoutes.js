const publicRoutes = {
  'GET /user/:password': 'UserController.register',
  'GET /register/:password': 'UserController.register', // alias for GET /user
  'GET /login/:id/:password': 'UserController.login',
  'GET /validate/:token': 'UserController.validate',
  'GET /users': 'UserController.getAll',
};

module.exports = publicRoutes;
