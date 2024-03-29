const express = require('express');

const router = express.Router();

const userController = require('../controllers/authController');


router.post('/signup',userController.signup);
router.post('/signin',userController.signin);
router.get('/signout',userController.signout);


module.exports=router;