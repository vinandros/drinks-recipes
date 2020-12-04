import React, { useContext } from "react";
import { RecipesContext } from "./context/RecipesContext";
import Recipe from "./Recipe";

const RecipesList = () => {
  const { recipes } = useContext(RecipesContext);
  console.log(recipes);
  return (
    <div className="row mt-5">
      {recipes.map((recipe) => {
        return <Recipe key={recipe.idDrink} recipe={recipe} />;
      })}
    </div>
  );
};

export default RecipesList;
