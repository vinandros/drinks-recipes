import React, { useState } from "react";
import { RecipeContext } from "./context/RecipeContext";
import PropTypes from "prop-types";

import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 450,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Recipe = ({ recipe }) => {
  const { setRecipeId, activeRecipe, setActiveRecipe } = React.useContext(
    RecipeContext
  );
  const { idDrink, strDrink, strDrinkThumb } = recipe;

  //modal
  const [modalStyles] = useState(getModalStyle);
  const [open, setOpen] = useState(false);

  const classes = useStyles();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClick = () => {
    setRecipeId(recipe.idDrink);
    handleOpen();
  };

  const showIgredients = (activeRecipe) => {
    let ingredients = [];
    for (let i = 1; i < 16; i++) {
      if (activeRecipe[`strIngredient${i}`]) {
        ingredients.push(
          <li key={activeRecipe[`strIngredient${i}`]}>
            {activeRecipe[`strIngredient${i}`]} {activeRecipe[`strMeasure${i}`]}
          </li>
        );
      }
    }
    return ingredients;
  };

  return (
    <div className="col-md-4 mb-3">
      <div className="card">
        <h2 className="card-header">{idDrink}</h2>
        <img
          className="card-img-top"
          src={strDrinkThumb}
          alt={`Imagen de ${strDrink}`}
        />
        <div className="card-body">
          <button
            onClick={handleClick}
            type="button"
            className="btn btn-block btn-primary"
          >
            Show recipe
          </button>
          <Modal
            open={open}
            onClose={() => {
              handleClose();
              setActiveRecipe({});
              setRecipeId(0);
            }}
          >
            <div style={modalStyles} className={classes.paper}>
              <h2>{activeRecipe.strDrink}</h2>
              <h3 className="mt-4">Instructions</h3>
              <p>{activeRecipe.strInstructions}</p>
              <img
                className="img-fluid my-4"
                src={activeRecipe.strDrinkThumb}
                alt={`${activeRecipe.strDrink}`}
              />
              <h3>Ingredients and Mesurements</h3>
              <ul>{showIgredients(activeRecipe)}</ul>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
};
Recipe.propTypes = {
  recipe: PropTypes.object.isRequired,
};

export default Recipe;
