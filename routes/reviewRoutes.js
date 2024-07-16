const express = require('express');
const reviewController = require('../controllers/reviewController');
const authController = require('../controllers/authController');

const router = express.Router({ mergeParams: true });

router.use(authController.isAuthenticated);

router
  .route('/')
  .get(reviewController.getAllReviews)
  .post(
    authController.hasRole('user'),
    reviewController.setTourUserIds,
    reviewController.createReview
  );

router
  .route('/:id')
  .get(reviewController.getReview)
  .patch(authController.hasRole('user', 'admin'), reviewController.updateReview)
  .delete(
    authController.hasRole('user', 'admin'),
    reviewController.deleteReview
  );

module.exports = router;
