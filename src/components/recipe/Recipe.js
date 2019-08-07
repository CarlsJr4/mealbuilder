import React, { useContext } from 'react';
import FoodContext from '../../context/FoodContext';


export default function Recipe() {
	const globalState = useContext(FoodContext);
	const {
		servings,
		extendedIngredients,
		title,
		readyInMinutes,
		image,
		instructions,
		analyzedInstructions 
	} = globalState.recipeInfo;

	// The bug is caused by things not loading fast enough - How can we handle this?
	// The page loads faster than the state can be updated
	// Solution: Use async await? UseEffect?
	let ingredients 
	if (extendedIngredients) {
		ingredients = extendedIngredients.map(ingredient => 
			<li>{ingredient.originalString}</li>
		)
	} else ingredients = <li>Loading ingredients...</li>

	return (
		<div className="recipe">
			<h1>{title}</h1>

			<div className="recipe__summary">
				<img src={image} alt={title} />
				<div className="recipe__ingredients">
					<h3>Preparation time: </h3>
						 <p>{readyInMinutes} minutes</p>
					<h3>Number of servings: </h3>
					<p>{servings}</p>
					<h3>Ingredients:</h3>
					<ul>
						{ingredients}
					</ul>
				</div>
			</div>

				<div className="recipe__instructions">
					<h3>Instructions:</h3>
					<p>{instructions}</p>
				</div>
		</div>
	)
}
