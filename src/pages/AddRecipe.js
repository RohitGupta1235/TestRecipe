import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
// import "./RecipeApp.css";

function RecipeApp() {
  const [recipes, setRecipes] = useState([]);
  const [newRecipe, setNewRecipe] = useState({ name: "", description: "" });

  const handleNameChange = (event) => {
    setNewRecipe({ ...newRecipe, name: event.target.value });
  };

  const handleDescriptionChange = (event) => {
    setNewRecipe({ ...newRecipe, description: event.target.value });
  };

  const handleAddRecipe = () => {
    setRecipes([...recipes, newRecipe]);
    setNewRecipe({ name: "", description: "" });
  };

  const handleDeleteRecipe = (index) => {
    const newRecipes = [...recipes];
    newRecipes.splice(index, 1);
    setRecipes(newRecipes);
  };

  const handleClearAll = () => {
    setRecipes([]);
  };

  return (
    <div className="recipesHeader">
      <div className="recipes">
        <div className="recipe-app">
          <div className="headers">
            <h1>My Recipes</h1>
          </div>
          <div className="add-recipe">
            <input
              type="text"
              placeholder="Enter recipe name"
              value={newRecipe.name}
              onChange={handleNameChange}
            />
            <textarea
              placeholder="Enter recipe description"
              value={newRecipe.description}
              onChange={handleDescriptionChange}
            ></textarea>
            <button onClick={handleAddRecipe}>Add Recipe</button>
          </div>

          <div className="recipe-list">
            {recipes.map((recipe, index) => (
              <div className="recipe" key={index}>
                <h1>{recipe.name}</h1>
                {recipe.description.split("\n").map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
                <FontAwesomeIcon
                  icon={faTrash}
                  style={{
                    fontSize: "15px",
                    color: "#e74c3c",
                    cursor: "pointer",

                    float: "right",
                    position: "relative",
                    top: "-2rem",
                    right: "0.9rem",
                  }}
                  onClick={() => handleDeleteRecipe(index)}
                />
              </div>
            ))}
          </div>
          {recipes.length > 0 && (
            <div className="clear-all">
              <button onClick={handleClearAll}>Clear All</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default RecipeApp;
