import { Component } from '@angular/core';
import {Reciepe} from "./recipe.model";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent   {

  selectedRecipe:Reciepe;

}
