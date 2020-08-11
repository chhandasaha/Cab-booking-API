const User = require('../models/User');
const authService = require('../services/auth.service');
const bcryptService = require('../services/bcrypt.service');

const UserController = () => {
  const register = async (req, res) => {
    const { password } = req.params;

    console.log(password);

    try {
      const user = await User.create({
        // id: body.id,
        password: password,
      });
      const token = authService().issue({ id: user.id });
      return res.status(200).json({ token, user });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: 'Internal server error' });
    }
  };

  const login = async (req, res) => {
    const { id, password } = req.params;

    console.log(id, password);

    if (id && password) {
      try {
        const user = await User
          .findOne({
            where: {
              id,
            },
          });
        console.log(password);

        if (!user) {
          return res.status(400).json({ msg: 'Bad Request: User not found' });
        }
        // const comp = bcryptService().comparePassword(password, user.password);
		
        // console.log(comp);
		console.log(user.password, password);
        if (password == user.password) {
          const token = authService().issue({ id: user.id });

          return res.status(200).json({ token, user });
        }

        return res.status(401).json({ msg: 'Unauthorized' });
      } catch (err) {
        console.log(err);
        return res.status(500).json({ msg: 'Internal server error' });
      }
    }

    return res.status(400).json({ msg: 'Bad Request: Something is wrong' });
  };

  const validate = (req, res) => {
    const { token } = req.params;

    authService().verify(token, (err) => {
      if (err) {
        // return res.status(401).json({ isvalid: false, err: 'Invalid Token!' });
        return res.status(401).json({ isvalid: false, error: err.message });
      }

      return res.status(200).json({ isvalid: true });
    });
  };

  const getAll = async (req, res) => {
    try {
      const users = await User.findAll();

      return res.status(200).json({ users });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: 'Internal server error' });
    }
  };


  return {
    register,
    login,
    validate,
    getAll,
  };
};

module.exports = UserController;
