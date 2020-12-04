import React, { createContext, useEffect } from "react";

export const CategoriesContext = createContext();

const CategoriesProvider = (props) => {
  const [categories, setCategories] = React.useState([]);

  useEffect(() => {
    const requestCategories = async () => {
      try {
        const res = await fetch(process.env.REACT_APP_API_URL);
        const result = await res.json();
        setCategories(result.drinks);
      } catch (error) {
        console.log(error);
      }
    };
    requestCategories();
  }, []);

  return (
    <CategoriesContext.Provider value={{ categories }}>
      {props.children}
    </CategoriesContext.Provider>
  );
};

export default CategoriesProvider;
