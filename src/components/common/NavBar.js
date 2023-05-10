import React from "react";
import { logo } from "../../constants/constant";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <Menu borderless fixed="top">
      <Menu.Item as={Link} to="/">
        <img src={logo} alt="logo" style={{ width: 150 }} />
      </Menu.Item>
      {/* <Menu.Item name="Home" as={Link} to="/" /> */}
      <Menu.Item
        name="Recipies"
        as={Link}
        to="/recipes"
        style={{ color: "skyblue" }}
      />
      <Menu.Item
        name="MyRecipe"
        as={Link}
        to="/myRecipes"
        style={{ color: "skyblue" }}
      />
      <Menu.Item
        component={Link}
        name="ChatGpt"
        href="https://chat.openai.com/"
      />
    </Menu>
  );
};

export default NavBar;
