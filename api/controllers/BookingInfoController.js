const BookingInfo = require('../models/BookingInfo');
const authService = require('../services/auth.service');
// const bcryptService = require('../services/bcrypt.service');

const BookingInfoController = () => {
	
  

const createBooking = async (req, res) => {
	return res.status(200).json({ isworking: true });
};
const getBooking = async (req, res) => {
	return res.status(200).json({ isworking: true });
}; 


  return {
    createBooking,
	getBooking,
	
  };
};

module.exports = UserController;
