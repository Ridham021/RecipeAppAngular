import {EventEmitter, Injectable} from "@angular/core";
import {Reciepe} from "../app/recipes/recipe.model";
import {RecipesComponent} from "../app/recipes/recipes.component";
import {Ingredient} from "../app/shared/ingredient.model";
import {ShoppingListServices} from "./shopping-list.services";
import {Subject} from "rxjs";


@Injectable({providedIn:'root'})
export class RecipeServices{

  // recipeSelected = new Subject<Reciepe>();

  recipesChanged = new Subject<Reciepe[]>();
  constructor(private slService : ShoppingListServices) {
  }
  // private recipes:Reciepe[] = [
  //   new Reciepe('A test Recipe','This is simply a test recipe','https://thumbs.dreamstime.com/b/pasta-arabbiata-25793698.jpg',
  //     [new Ingredient("Meat",1) , new Ingredient("French Fries",4)]),
  //   new Reciepe('Chocolate Cake','This is simply a test recipe','https://images.unsplash.com/photo-1626263468007-a9e0cf83f1ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNob2NvbGF0ZSUyMGNha2V8ZW58MHx8MHx8&w=1000&q=80',
  //     [new Ingredient("Buns",2),new Ingredient("Meat",1)]),
  //
  // ];
  private recipes : Reciepe[] = [];

  setRecipes(recipes: Reciepe[]){
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());

  }
    getRecipes(){
      return this.recipes.slice();
    }



    getRecipe(id:number){
      return this.recipes[id];
    }

    addIngredientsToShoppingList(ingredient : Ingredient[]){
         this.slService.addIngredients(ingredient);
    }

    addRecipe(recipe:Reciepe){
      this.recipes.push(recipe);
      this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index:number , newRecipe:Reciepe){
      this.recipes[index] = newRecipe;
      this.recipesChanged.next(this.recipes.slice());

    }

    deleteRecipe(index:number){
      this.recipes.splice(index,1);
      this.recipesChanged.next(this.recipes.slice());
    }


}
