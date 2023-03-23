import {EventEmitter, Injectable} from "@angular/core";
import {Ingredient} from "../app/shared/ingredient.model";

@Injectable({providedIn:'root'})
export class ShoppingListServices{

  ingredientsChanged = new EventEmitter<Ingredient[]>();
  ingredients:Ingredient[] = [
    new Ingredient('Apple',5),
    new Ingredient('Banana',3)
  ];

  getIngredients(){
    return this.ingredients.slice();
  }

  addIngredient(ingredient : Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]){
    // for(let ingredient of ingredients){
    //   this.addIngredient(ingredient);
    // }

    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this.ingredients.slice());

  }


}
