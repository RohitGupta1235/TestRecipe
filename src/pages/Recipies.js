import React from "react";
import { useState, useEffect } from "react";
import Search from "../components/Search";
import RecipeList from "../components/RecipeList";
import { getRecipies } from "../services/api";
const Recipies = () => {
  const [searchedQuery, setSearchedQuery] = useState("pizza");
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getSearchedResult();
  }, [searchedQuery]);

  //agr empty array likhnege to ek baar call hoga
  //but baar search kr rhe hein uspe humko dekhna
  //hein to searchedQuer pass krna hoga
  const getSearchedResult = async () => {
    let result = await getRecipies(searchedQuery);
    if (result && result.recipes) {
      setRecipes(result.recipes);
    }
  };

  return (
    <>
      <Search setSearchedQuery={setSearchedQuery} />
      <RecipeList recipes={recipes} searchedQuery={searchedQuery} />
    </>
  );
};

export default Recipies;
