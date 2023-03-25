import  {EventEmitter, Injectable} from "@angular/core";
import {Ingredient} from "../app/shared/ingredient.model";
import {Subject, Subscribable, Subscription} from "rxjs";

@Injectable({providedIn:'root'})
export class ShoppingListServices{

  private igChangeSub:Subscription;

  startedEditing = new Subject<number>();
  ingredientsChanged = new Subject<Ingredient[]>();
  ingredients:Ingredient[] = [
    new Ingredient('Apple',5),
    new Ingredient('Banana',3)
  ];

  getIngredients(){
    return this.ingredients.slice();
  }

  getIngredient(index:number){
    // console.log(this.ingredients[index])
    return this.ingredients[index];
  }

  addIngredient(ingredient : Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  updateIngredient(index:number , ingredient : Ingredient){
    this.ingredients[index] = ingredient;
    this.ingredientsChanged.next(this.ingredients.slice())
  }

  deleteIngredient(index:number){
    this.ingredients.splice(index,1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]){
    // for(let ingredient of ingredients){
    //   this.addIngredient(ingredient);
    // }

    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());

  }




}
