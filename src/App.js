import React,{useEffect, useState} from 'react';
import Recipes from './components/Recipes';
import './App.css';

const App =() => {

  const App_Id = '992d87d3';
  const App_Key = "482c05899eb48b545a107644077aa509";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    getRecipes();
  }, [query]);

const getRecipes = async() => {
  const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${App_Id}&app_key=${App_Key}`);
  const data = await response.json();
  setRecipes(data.hits);
}

const updateSearch= (e) => {  
  setSearch(e.target.value);
}

const getSearch = (e) => {
  e.preventDefault();
  setQuery(search);
  setSearch('');
}


  return (
    <div className="App">
      <form action="" className="search-form" onSubmit={getSearch}>
        <input type="text" name="" id="" className="search-bar" value={search} onChange={updateSearch}/>
        <button className="search-button"> Search </button>
      </form>

      <div className="recipes">
        {recipes.map((recipe) => (<Recipes
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
        />))}
      </div>
    </div>
  )
}

export default App;
