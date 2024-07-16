/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';

export const bookTour = async (tourId) => {
  const stripe = Stripe(
    'pk_test_51MGaHxJRwAqkVjmD69Lomr0ha2SGaFuslyWR8InfbxrQI9oeJwtSMvqo8BAGAkOFJrrvKDkM8Yz6s4Ud1hj3W3sp008D5c94g4'
  );

  try {
    // 1) Get checkout session from API
    const baseUrl = ``;
    const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`);

    // 2) Create checkout form + charge credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
