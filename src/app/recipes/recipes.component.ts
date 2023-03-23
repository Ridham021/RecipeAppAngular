import {Component, OnInit} from '@angular/core';
import {Reciepe} from "./recipe.model";
import {RecipeServices} from "../../services/recipe.services";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers:[RecipeServices]
})
export class RecipesComponent  implements OnInit{

  selectedRecipe:Reciepe;

  constructor(private recipeService : RecipeServices) {
  }



  ngOnInit() {
    this.recipeService.recipeSelected.subscribe(
      (recipe:Reciepe) => {
      console.log("RecipeComponent:",recipe);
      this.selectedRecipe = recipe;
    }, err => {
        console.log(err)
      })
  }

}
