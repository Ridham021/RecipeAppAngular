import {EventEmitter, Injectable} from "@angular/core";
import {Reciepe} from "../app/recipes/recipe.model";
import {RecipesComponent} from "../app/recipes/recipes.component";


@Injectable()
export class RecipeServices{

  recipeSelected = new EventEmitter<Reciepe>();
  private recipes:Reciepe[] = [
    new Reciepe('A test Recipe','This is simply a test recipe','https://thumbs.dreamstime.com/b/pasta-arabbiata-25793698.jpg'),
    new Reciepe('Chocolate Cake','This is simply a test recipe','https://images.unsplash.com/photo-1626263468007-a9e0cf83f1ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNob2NvbGF0ZSUyMGNha2V8ZW58MHx8MHx8&w=1000&q=80'),

  ];

    getRecipes(){
      return this.recipes.slice();
    }


}
