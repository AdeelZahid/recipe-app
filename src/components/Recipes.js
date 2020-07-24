import React from 'react'

const Recipes = ({title, calories, image, ingredients}) => {
    return (
        <div>
            <h1>{title}</h1>
            <ol>
                {ingredients.map(item => (
                    <li>{item.text}</li>
                ))}
            </ol>
            <p>{calories}</p>
            <img src={image} alt="recipeImg"/>
        </div>
    )
}

export default Recipes