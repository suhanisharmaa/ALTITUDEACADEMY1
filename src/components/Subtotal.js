import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import { Link, useHistory } from "react-router-dom";
import displayRazorpay from "../utils/PaymentGateway";

function Subtotal() {
  const history = useHistory();
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket?.length} items): <strong>{value}</strong>
            </p>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"Rs "}
      />
      {/* push the user to another page use history */}
      <button onClick={displayRazorpay}> 
      {/* {(e) => history.push("/checkout")} */}
        Proceed to Checkout
      </button>
    </div>
  );
}

export default Subtotal;