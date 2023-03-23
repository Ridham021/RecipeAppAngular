import {Component, Input, OnInit} from '@angular/core';
import {Reciepe} from "../recipe.model";
import {RecipeServices} from "../../../services/recipe.services";

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css'],
  // providers : [RecipeServices]
})
export class RecipeDetailsComponent implements OnInit {


  constructor(private recipeService : RecipeServices) {


  }
  @Input() recipe:Reciepe;


  ngOnInit(){
    console.log("recipe-details called");
  }

  onAddToShoppingList(){
        this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

}
