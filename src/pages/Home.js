import React from "react";
import { Button } from "semantic-ui-react";
import Header from "../components/common/Header";
import { Link } from "react-router-dom";
const Home = () => {
  //component k bich mein dusra component pass krte hein use children khte hein
  //aur component k jo andar pass krte hein use props khte h
  //this is just a trivea

  return (
    <Header title="Our Recipies" bgClass="bg-image">
      <Button
        content="SEARCH RECIPES"
        color="primary"
        as={Link}
        to="/recipes"
        size="big"
      />
    </Header>
  );
};

export default Home;
