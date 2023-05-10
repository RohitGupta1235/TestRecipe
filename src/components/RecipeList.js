import React from "react";
import RecipeListItem from "./RecipeListItem";
import { Container, Header, Grid, GridColumn } from "semantic-ui-react";

const RecipeList = ({ recipes, searchedQuery }) => {
  return (
    <Container>
      <Header
        size="huge"
        content={
          <>
            RECIPE LIST FOR
            <span style={{ color: "red" }}>&nbsp; &nbsp;{searchedQuery}</span>
          </>
        }
        textAlign="center"
      />

      <Grid columns={4} doubling>
        {recipes &&
          recipes.map((recipe) => (
            <Grid.Column>
              <RecipeListItem recipe={recipe} />
            </Grid.Column>
          ))}
      </Grid>
    </Container>
  );
};

export default RecipeList;
