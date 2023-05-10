import React from "react";
import { useState } from "react";
import { Grid, Form, Input } from "semantic-ui-react";

//object destructuring ka use hoga promps pass kr ke
const Search = ({ setSearchedQuery }) => {
  const [value, setValue] = useState("");
  const onFormSubmit = () => {
    setSearchedQuery(value);
  };

  return (
    <Grid columns={2} textAlign="center" className="search-box">
      <Grid.Column>
        <h2 className="search-heading">
          Search Recipies with
          <span style={{ color: "#2185d0" }}> Our Recipies</span>
        </h2>
        <h4>Input Recpies seperated by comma</h4>
        <Form onSubmit={onFormSubmit}>
          <Input
            placeholder="tomato,potato,pizza"
            action={{ icon: "search", color: "blue" }}
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
        </Form>
      </Grid.Column>
    </Grid>
  );
};

export default Search;
