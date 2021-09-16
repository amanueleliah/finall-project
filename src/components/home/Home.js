import React from "react";
import "./Home.css";
import Header from "../header/Header";
import { Box, Heading, Tag, Text, Button,VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import reactDom from "react-dom";

function Home() {

  return (
    <div className="home">
      <Box>
        <Header title="Fake Store" />
      </Box>
      <div className="home__container">
        <Link to="/store">
          <img
            className="home__image"
            src="https://fakestoreapi.com/icons/intro.svg"
            alt=""
          />
        </Link>
      </div>
        <Tag p={8}  className="home-Cookie" colorScheme="pink">
          Choose your cookie preferences We use cookies and similar tools that
          are necessary to enable you to make purchases, to improve your
          shopping experience and to provide our services, as detailed in our
          Cookie Notice . We also use these cookies to understand how customers
          use our services (for example, by measuring site visits) so that we
          can make improvements. If you agree, we will also use cookies that
          complement your shopping experience, as described in our Cookie Notice
          . This includes the use of third-party cookies for the purpose of
          displaying and measuring interest-based advertising. Click on
          "Personalize cookies" to refuse these cookies, make more detailed
          choices or find out more.
        </Tag>
    </div>
  );
}

export default Home;
