import React, { createContext, useEffect, useState } from "react";

export const RecipesContext = createContext();

const RecipesProvider = (props) => {
  const [recipes, setRecipes] = useState([]);
  const [searchData, setSearchData] = useState({
    ingredient: "",
    category: "",
  });

  useEffect(() => {
    if (searchData.ingredient === "" || searchData.category === "") {
      return;
    }
    const searchRequest = async () => {
      try {
        const res = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${searchData.ingredient}&c=${searchData.category}`
        );
        const result = await res.json();
        setRecipes(result.drinks);
      } catch (error) {
        console.log(error);
      }
    };

    searchRequest();
  }, [searchData]);
  return (
    <RecipesContext.Provider value={{ setSearchData, recipes }}>
      {props.children}
    </RecipesContext.Provider>
  );
};

export default RecipesProvider;
