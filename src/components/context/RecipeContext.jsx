import React, { createContext, useState, useEffect } from "react";

export const RecipeContext = createContext();

const RecipeProvider = (props) => {
  const [recipeId, setRecipeId] = useState(0);
  const [activeRecipe, setActiveRecipe] = useState({});

  useEffect(() => {
    if (recipeId === 0) {
      return;
    }
    const requestRecipe = async () => {
      const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${recipeId}`;
      try {
        const res = await fetch(url);
        const result = await res.json();
        setActiveRecipe(result.drinks[0]);
      } catch (error) {
        console.log(error);
      }
    };
    requestRecipe();
  }, [recipeId]);
  return (
    <RecipeContext.Provider
      value={{ setRecipeId, activeRecipe, setActiveRecipe }}
    >
      {props.children}
    </RecipeContext.Provider>
  );
};

export default RecipeProvider;
