import {
  Box,
  Center,
  Heading,
  Image,
  Text,
  Tag,
  Button,
  Stack,
  HStack,
  SimpleGrid,
  GridItem,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import Header from "../header/Header";
import { useStateValue } from "../stateprovider/Stateprovider";

function SingleProduct({ location, id, title, image, price, rating }) {
  const { state } = location;

  const ProductDetails = ({ title }) => (
    <Box p={4} shadow="md">
      <Heading>{title}</Heading>
    </Box>
  );

  const [{ basket }, dispatch] = useStateValue();

  // console.log('this is the cart', basket);

  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
          id: id,
          title: title,
          image: image,
          price: price,
          rating: rating,
      },
    });
  };

  if (!state) {
    window.location = "/";
  }

  return (
    <Box>
      <Header />
      <ProductDetails title={state.title} />
      <Box p={8} d="flex" alignItems="center">
        <Box ml={6}>
          <SimpleGrid spacing={4} columns={{ base: 1, md: 5 }}>
            <GridItem colSpan={2}>
              <Center>
                <Image w={48} src={state.image} />
              </Center>
            </GridItem>
            <GridItem colSpan={3}>
              <Stack spacing={4}>
                <Box mt={3}>
                  <Heading>Price:$ {state.price}</Heading>
                  <Tag as="i">{state.category}</Tag>
                </Box>
                <Box>
                  <Tag p={2}>Rate {state.rating.rate}</Tag>
                  <Tag p={2} ml={4}>
                    {state.rating.count} Peaple
                  </Tag>
                </Box>
                <Text>{state.description}</Text>
                <HStack>
                  <Link to="/checkout">
                    <Button
                      w="xs"
                      size="md"
                      colorScheme="purple"
                      onClick={addToBasket}
                    >
                      Buy now
                    </Button>
                  </Link>
                  <Button
                    w="xs"
                    size="md"
                    colorScheme="purple"
                    onClick={addToBasket}
                  >
                    Add to cart
                  </Button>
                </HStack>
                <Link to="/store" >
                <Button w="xs" size="md" colorScheme="pink">
                  Wants Back to Store
                </Button>
                </Link>
              </Stack>
            </GridItem>
          </SimpleGrid>
        </Box>
      </Box>
    </Box>
  );
}

export default SingleProduct;
