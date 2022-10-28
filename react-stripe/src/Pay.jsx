import React from "react";
import { useState, useEffect } from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const KEY =
  "pk_test_51LuBphBJaoOjqh5IqEU4jxcYHWipz8rJKhWFumV1EUPCdnOAgBAbEDkNC58z1f3UIfYSQh35BgBnu1fDIHkP84Iv00OBqW8Csi";

const Pay = () => {
  const [stripeToken, setStripeToken] = useState(null);
  //最初はトークンはありません 初期値null
  const navigation = useNavigate();
  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await axios.post(
          "http://localhost:5000/api/checkout/payment",
          {
            tokenId: stripeToken.id,
            amount: 2000,
          }
        );
        console.log(res.data);
        navigation("/success");
      } catch (err) {
        console.log(err);
      }
    };
    stripeToken && makeRequest();
  }, [stripeToken ,navigation]);
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {stripeToken ? (
        <span>Processing. Please wait...</span>
      ) : (
        <StripeCheckout
          name="Yuuto Shop"
          image="https://avatars.githubusercontent.com/u/1486366?v=4"
          billingAddress
          shippingAddress
          description="Your total is $20"
          amount={2000}
          token={onToken}
          stripeKey={KEY}
        >
          <button
            style={{
              cursor: "pointer",
              fontWeight: "bold",
              color: "white",
              border: "none",
              width: 120,
              borderRadius: 5,
              padding: "20px",
              background: "black",
            }}
          >
            Pay Now
          </button>
        </StripeCheckout>
      )}
    </div>
  );
};

export default Pay;
