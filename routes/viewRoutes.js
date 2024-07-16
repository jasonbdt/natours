const express = require('express');
const authController = require('../controllers/authController');
const viewsController = require('../controllers/viewsController');

const router = express.Router();

router.use(viewsController.alerts);

router.get('/', authController.isLoggedIn, viewsController.getOverview);

router.get('/tour/:slug', authController.isLoggedIn, viewsController.getTour);
router.get('/login', authController.isLoggedIn, viewsController.getLoginForm);

router.get('/me', authController.isAuthenticated, viewsController.getAccount);
router.get(
  '/my-tours',
  authController.isAuthenticated,
  viewsController.getMyTours
);
// router.post(
//   '/update-user',
//   authController.isAuthenticated,
//   viewsController.updateUser
// );

module.exports = router;
