import axios from "axios";
// import { useState, useEffect } from "react";
import Store from "./components/store/Store";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ProductDetails from "./components/productDetails/ProductDetails";
import SingleProduct from "./components/productDetails/ProductDetails";
import Home from "./components/home/Home";
import Checkout from "./components/checkoutPage/Checkout";
import Login from "./components/login/Login";
import { useStateValue } from "./components/stateprovider/Stateprovider"
import {auth} from "./firebase"
import Payment from "./components/payment/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Four0four from "./components/Four0four";

const promise = loadStripe(
  "pk_test_51JaNxWJ8Q8Z7Bcp22UPUHOK05k1Q1SMcC9oA7ynqhn1anytTpeIilC0Dt8PCDtfxIaPfT6Z122zpLycVCLkCNgc400J1yMI62a"
);

function App() {
    // useEffect(() => {
    //   auth.onAuthStateChanged((authUser) => {
    //     // console.log("THE USER IS >>> ", authUser);
    //     if (authUser) {
    //       // the user just logged in / the user was logged in

    //       dispatch({
    //         type: "SET_USER",
    //         user: authUser,
    //       });
    //     } else {
    //       // the user is logged out
    //       dispatch({
    //         type: "SET_USER",
    //         user: null,
    //       });
    //     }
    //   });
    // }, []);
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={(props) => <Home />} />
        <Route path="/store" component={(props) => <Store />} />
        <Route path="/login" component={(props) => <Login />} />
        <Route
          path="/product/:id"
          component={(props) => <SingleProduct {...props} />}
        />
        <Route
          path="/checkout"
          component={(props) => <Checkout {...props} />}
        />
        <Route path="/payment">
          <Elements stripe={promise}>
            <Payment />
          </Elements>
        </Route>
        <Route><Four0four/></Route>
      </Switch>
    </Router>
  );
}

export default App;
