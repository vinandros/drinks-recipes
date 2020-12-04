import React from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import CategoriesProvider from "./components/context/CategoryContext";

function App() {
  return (
    <CategoriesProvider>
      <Header />
      <div className="container mt-5">
        <div className="row">
          <Form />
        </div>
      </div>
    </CategoriesProvider>
  );
}

export default App;
