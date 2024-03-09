import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

export class Recipe {
  name: string;
  ingredients: string[];

  constructor(name: string, ingredients: string[]) {
    this.name = name;
    this.ingredients = ingredients;
  }
}

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent {
  recipes: Recipe[] = [];
  newRecipeName: string = '';
  newIngredient: string = '';
  recipeNameError: boolean = false;
  ingredientError: boolean = false;

  addRecipe() {
    const newRecipe = new Recipe(this.newRecipeName, []);
    this.recipes.push(newRecipe);
    this.newRecipeName = '';
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
  }

  clearRecipes() {
    this.recipes = [];
  }

  addIngredient(recipe: Recipe) {
    recipe.ingredients.push(this.newIngredient);
    this.newIngredient = '';
  }

  deleteIngredient(recipe: Recipe, index: number) {
    recipe.ingredients.splice(index, 1);
  }

  clearIngredients(recipe: Recipe) {
    recipe.ingredients = [];
  }

  // Define the onSubmit method to handle form submission
  onSubmit(form: NgForm) {
    this.recipeNameError = this.newRecipeName.trim() === '';
    this.ingredientError = this.newIngredient.trim() === '';

    if (form.valid && !this.recipeNameError && !this.ingredientError) {
      // Form is valid and input values are not empty, handle the form submission logic here
      this.addRecipe();
      this.resetForm(form);
    }
  }

  resetForm(form: NgForm) {
    form.resetForm();
    this.recipeNameError = false;
    this.ingredientError = false;
  }
}

