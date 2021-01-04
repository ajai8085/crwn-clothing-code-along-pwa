import StripeCheckout from 'react-stripe-checkout';
const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = '';

  const onToken = (token) => {
    console.log('Payment successful');
    console.log(token);
    alert('Payment successful');
  };

  return (
    <StripeCheckout
      amount={priceForStripe}
      label="Pay Now"
      billingAddress
      aescription={`Your total is $${price}`}
      panelLabel="Pay Now"
      image="https://sendeyo.com/up/d/f3eb2117da"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
