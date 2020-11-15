import React from "react";
import StripeCheckout from "react-stripe-checkout";

function StripeButton({ price }) {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51HnlVSB6XEcKj68yJ355gDTDWZZi1V5EvHetHTtddR3QTcdBzqdJsTVWsrWFjYsXPOpAN81DzroehGElJUgf8e4a00HtJsvAnp";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="E-Commerce Site"
      billingAddress
      shippingAddress
      image="http://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
}

export default StripeButton;
