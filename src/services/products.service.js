import {
  errorPayment,
  resetCart,
  sendPayment,
  successPayment,
} from "../redux/states/cart.state";
import {
  getProducts,
  getProductsError,
  getProductsSuccess,
} from "../redux/states/producs.state";

export function handleFetchProducts() {
  return async (dispatch) => {
    dispatch(getProducts());
    try {
      const data = await fetch("https://ait-tesapi.herokuapp.com/products");
      const json = await data.json();
      dispatch(getProductsSuccess(json.products));
    } catch (error) {
      console.log(error);
      dispatch(getProductsError());
    }
  };
}

export function handleSendPayment(data) {
  return async (dispatch) => {
    console.log(data);
    dispatch(sendPayment());
    fetch("https://ait-tesapi.herokuapp.com/sales", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then(() => {
        dispatch(successPayment());
        dispatch(resetCart());
        alert("Payment Successfull");
      })
      .catch((error) => {
        dispatch(errorPayment());
        alert(error);
      });
  };
}
