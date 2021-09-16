import React, { useEffect, useState, } from "react";
import "./Store.css";
import {
  Box,
  Button,
  Center,
  GridItem,
  Image,
  Input,
  Heading,
  SimpleGrid,
  Spinner,
  Spacer,
  Tag,
} from "@chakra-ui/react";

import Header from "../header/Header";
import { Link } from "react-router-dom";
import axios from "axios";


const StoreItem = ({ title, price, image }) => {
  return (
    <Box p={4} borderRadius="lg" borderWidth="1px">
      <Center>
        <Image src={image} width={24} />
      </Center>
      <Heading mt={4} noOfLines={2} size="sm" fontWeight="medium">
        {" "}
        {title}{" "}
      </Heading>
      <Spacer />
      <Tag>${price}</Tag>
    </Box>
  );
};

function Store() {
  const [storeItems, setStoreItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [loading, setloading] = useState(true);
  


  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then(({ data }) => {
      setloading(false);
      setStoreItems(data);
      setFilteredItems(data);
    });
  }, []);

  return (
    <Box>
      <Header title="Fake Store" />
      {loading ? (
        <Center>
          <Spinner />
        </Center>
      ) : (
        <Box p={2}>
          <Input
            borderInlineStartColor="pink"
            onChange={(e) => {
              let result = storeItems.filter((item) =>
                item.title.toLowerCase().includes(e.target.value.toLowerCase())
              );
              setFilteredItems(result);
            }}
            placeholder="Type here to Search a product"
            mt={4}
            colorScheme="pink"
          />

          <SimpleGrid columns={4} spacing={4} mt={6} p={2}>
            {filteredItems.map((item) => {
              return (
                <GridItem className="tomove">
                  <Link
                    to={{
                      pathname: `/product/${item.id},`,
                      state: item,
                    }}
                  >
                    <StoreItem {...item} />
                    <Center>
                      <Button w="s" size="sm" colorScheme="pink">
                        product Detaile
                      </Button>
                    </Center>
                  </Link>
                </GridItem>
              );
            })}
          </SimpleGrid>
        </Box>
      )}
    </Box>
  );
}

export default Store;
