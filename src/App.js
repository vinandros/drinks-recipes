import React from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import RecipesList from "./components/RecipesList";
import CategoriesProvider from "./components/context/CategoryContext";
import RecipesContext from "./components/context/RecipesContext";
import RecipeContext from "./components/context/RecipeContext";

function App() {
  return (
    <CategoriesProvider>
      <RecipesContext>
        <RecipeContext>
          <Header />
          <div className="container mt-5">
            <div className="row">
              <Form />
            </div>
            <RecipesList />
          </div>
        </RecipeContext>
      </RecipesContext>
    </CategoriesProvider>
  );
}

export default App;
