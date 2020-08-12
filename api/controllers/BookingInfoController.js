const BookingInfo = require('../models/BookingInfo');
const User = require('../models/User');
// const authService = require('../services/auth.service');
// const bcryptService = require('../services/bcrypt.service');

const BookingInfoController = () => {
  const createBooking = async (req, res) => {
    const {
      userid, password, startLoc, endLoc,
    } = req.params;

    if (userid && password && startLoc && endLoc) {
      try {
        const user = await User
          .findOne({
            where: {
              userid,
            },
          });

        if (!user) {
          return res.status(400).json({ msg: 'Bad Request: User not found' });
        }
        if (password === user.password) {
          const newBooking = await BookingInfo.create({
            userid,
            startLoc,
            endLoc,
          });
          return res.status(200).json({ newBooking });
        }

        return res.status(401).json({ msg: 'Unauthorized' });
      } catch (err) {
        return res.status(500).json({ msg: 'Internal server error' });
      }
    }
    return res.status(400).json({ err: 'Something is missing' });
    // return res.status(200).json({ isworking: true });
  };
  const getBooking = async (req, res) => res.status(200).json({ isworking: true });


  return {
    createBooking,
    getBooking,

  };
};

module.exports = BookingInfoController;
