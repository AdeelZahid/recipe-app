import React from 'react'
import styles from './Recipes.module.css';

const Recipes = ({title, calories, image, ingredients}) => {
    return (
        <div className={styles.recipe}>
            <h1>{title}</h1>
            <ol>
                {ingredients.map(item => (
                    <li>{item.text}</li>
                ))}
            </ol>
            <p>{calories}</p>
            <img className={styles.image} src={image} alt="recipeImg"/>
        </div>
    )
}

export default Recipes