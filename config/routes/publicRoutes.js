const publicRoutes = {
  'GET /user': 'UserController.register',
  'GET /register': 'UserController.register', // alias for GET /user
  'GET /login': 'UserController.login',
  'GET /validate': 'UserController.validate',
};

module.exports = publicRoutes;
