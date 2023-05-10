import React, { useEffect, useState } from "react";
import { getRecipie } from "../services/api";
import { useParams } from "react-router-dom";
import { Image, Button, Grid, Header, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";
//params ko nikl bhi skate hein useParams kein madat se

//is page pe hummlog aaye himn recipeId particular unique recipe id ke madata se to hume /recipes/1234 jo id hein age
//wo params hein uska istmal krna

const RecipeDetails = () => {
  const [recipe, setRecipe] = useState({});
  const { recipeId } = useParams();

  useEffect(() => {
    const getData = async () => {
      let result = await getRecipie(recipeId);
      if (result && result.recipe) setRecipe(result.recipe);
    };
    getData();
  }, []);

  return Object.keys(recipe).length > 0 ? (
    <Grid container stackable columns={2} className="detailsPageContent">
      <Grid.Column>
        <Button
          as={Link}
          to={"/recipes"}
          content="Back to recipe List"
          color="yellow"
          style={{ marginBottom: 31 }}
        />
        <Image src={recipe.image_url} style={{}} />
      </Grid.Column>

      <Grid.Column>
        <Header size="medium" content={recipe.title} />
        <p>
          Provided By : &nbsp;
          <span style={{ color: "orange" }}>
            <em>{recipe.publisher}</em>
          </span>
        </p>
        <Button
          as={"a"}
          href={recipe.publisher_url}
          target="_blank"
          content="Publisher WebPage"
          color="blue"
        />
        <Button
          as={"a"}
          href={recipe.source_url}
          target="_blank"
          content="Recipe URL"
          color="green"
        />
        {/*jetne bhi ingridents hein unhe loop karna hein  Segemnt  semantic-ui-react*/}
        <Header size="large" content="Ingredients" />
        <Segment.Group>
          {recipe &&
            recipe.ingredients.map((data) => (
              <Segment>
                <h5 style={{ color: "brown" }}>{data}</h5>
              </Segment>
            ))}
        </Segment.Group>
      </Grid.Column>
    </Grid>
  ) : null;
};

export default RecipeDetails;
