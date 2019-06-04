import React, { Component } from 'react';
import Meal from './Meal';
import axios from 'axios';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { query: '', recipes: [] };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getRecipes = this.getRecipes.bind(this);
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.getRecipes();
  }

  async getRecipes() {
    const API_ID = '5c151b14';
    const API_KEY = '05c31a973132aadfdea1fee1da3875f6';
    const URL = `https://api.edamam.com/search?q=${
      this.state.query
    }&app_id=${API_ID}&app_key=${API_KEY}`;
    const response = await axios.get(URL);
    const data = response.data;
    this.setState({ recipes: data.hits });
    console.log(this.state.recipes);
  }
  render() {
    const getMeals = this.state.recipes.map(r => (
      <Meal
        key={r.recipe.shareAs}
        title={r.recipe.label}
        calories={r.recipe.calories}
        image={r.recipe.image}
      />
    ));
    return (
      <div className="Search">
        <form onSubmit={this.handleSubmit}>
          <input
            name="query"
            className="Search-box"
            type="text"
            value={this.state.query}
            onChange={this.handleChange}
            placeholder="Search Food"
          />
          <input className="Search-btn" type="submit" value="Search" />
        </form>
        {getMeals}
      </div>
    );
  }
}

export default Search;
