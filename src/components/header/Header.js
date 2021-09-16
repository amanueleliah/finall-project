import React from 'react'
import { Box,Center, Heading, HStack, Image, Input, Spacer } from "@chakra-ui/react";
import "./Header.css"
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from 'react-router-dom';
import {useStateValue} from "../stateprovider/Stateprovider"
import { Button } from '@material-ui/core';
// import {auth} from "../../firebase"
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";



//https://fakestoreapi.com/icons/logo.png
function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  //  const handleAuthenticaton = () => {
  //    if (user) {
  //      auth.signOut();
  //    }
  //  };
  // {!user && '/login'}
  // onClick={handleAuthenticaton}

  return (
    <div className="header">
      <HStack>
        <Link to="/">
          <img
            className="header__logo"
            src="https://fakestoreapi.com/icons/logo.png"
          />
        </Link>
        <Heading w="xg" size="lg">
          WELLCOME TO FAKE STORE
        </Heading>
        <Link to="/login">
          <div className="header__nav">
            <span className="header__optionLineOne">
              Hello {!user ? "Gust" : user.email}
            </span>
            <span className="header__optionLineTwo">
              {!user ? "Guest" : "Sign In"}
            </span>
          </div>
        </Link>
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>
        <Spacer />
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        <Spacer />
        <Link to="/Checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
              {basket.length}
            </span>
          </div>
        </Link>
      </HStack>
    </div>
  );
}


export default Header
