import React, { useContext } from "react";
import { CategoriesContext } from "./context/CategoryContext";

const Form = () => {
  const { categories } = useContext(CategoriesContext);
  return (
    <form className="col-12" action="">
      <fieldset className="text-center">
        <legend>Drinks by categories and ingredients.</legend>
      </fieldset>
      <div className="row">
        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            name="name"
            placeholder="Search by ingredient"
          />
        </div>
        <div className="col-md-4">
          <select name="options" id="options" className="form-control">
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
