import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { Box, Button, SimpleGrid, GridItem } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "../stateprovider/Stateprovider";
import Header from "../header/Header";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <Box>
        <Header />
      </Box>
      <div className="checkout__left">
        <h1>Hello </h1>
        <h2 className="checkout__title">Your shopping Basket</h2>
        <SimpleGrid columns={4} spacing={4} mt={6} p={2}>
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
        </SimpleGrid>
      </div>
      <div className="checkout__right">
        <Subtotal />
        <Link to="/store">
          <Button p={2} mt={4} shadow="md" colorScheme="pink">
            Continue shopping
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Checkout;
