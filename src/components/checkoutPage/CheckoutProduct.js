import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "../stateprovider/Stateprovider";
import { Input, Button, SimpleGrid } from "@chakra-ui/react";
function CheckoutProduct({ id, image, title, price, rating, hideButton }) {
  const [{ basket, quantity }, dispatch] = useStateValue();
  
    const removeFromBasket = () => {
      dispatch({
        type: "REMOVE_FROM_BASKET",
        id: id,
      });
    };
  
  const handleQuantity = (quantity) => {
    dispatch({
      type: "ADD_QUANTITY",
      payload: quantity,
    })
  }

  
  
  return (
    <div>
      <SimpleGrid className="checkoutProduct">
        <img className="checkoutProduct__image" src={image} />
        <div className="checkoutProduct__info">
          <p className="checkoutProduct__title">{title}</p>
          <p className="checkoutProduct__price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
        </div>
      </SimpleGrid>
      <Button colorScheme="pink" onClick={removeFromBasket}>
        Remove from Basket
      </Button>
    </div>
  );
}

export default CheckoutProduct;
