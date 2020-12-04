import React, { useContext } from "react";
import { CategoriesContext } from "./context/CategoryContext";
import { RecipesContext } from "./context/RecipesContext";

const Form = () => {
  const { categories } = useContext(CategoriesContext);
  const { setSearchData } = useContext(RecipesContext);
  const [searchTerm, setSearchTerm] = React.useState({
    ingredient: "",
    category: "",
  });
  const [error, setError] = React.useState(false);

  const handleChange = (e) => {
    setSearchTerm({
      ...searchTerm,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSutmit = (e) => {
    e.preventDefault();
    if (searchTerm.category.trim() === "" || searchTerm.ingredient === "") {
      setError(true);
      return null;
    }
    setSearchData(searchTerm);
  };

  return (
    <form onSubmit={handleSutmit} className="col-12" action="">
      <fieldset className="text-center">
        <legend>Drinks by categories and ingredients.</legend>
      </fieldset>
      <div className="row">
        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            name="ingredient"
            placeholder="Search by ingredient"
            onChange={handleChange}
          />
        </div>
        <div className="col-md-4">
          <select
            name="category"
            id="category"
            className="form-control"
            onChange={handleChange}
          >
            <option value="">-- Choose Category --</option>
            {categories.map((category) => {
              return (
                <option key={category.strCategory} value={category.strCategory}>
                  {category.strCategory}
                </option>
              );
            })}
          </select>
        </div>
        <div className="col-md-4">
          <input
            type="submit"
            className="btn btn-block btn-primary"
            value="Search"
          />
        </div>
      </div>
    </form>
  );
};

export default Form;
