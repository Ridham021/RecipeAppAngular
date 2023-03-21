import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {

  @ViewChild('nameInput',{static:false}) nameInputRef : ElementRef;
  @ViewChild('amountInput',{static:false}) amountInputRef : ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  onAddItem(e){

    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = +this.amountInputRef.nativeElement.value;
    e.preventDefault();
    const newIngredient = new Ingredient(ingName,ingAmount);
    console.log(ingName+" "+ingAmount);
    this.ingredientAdded.emit(newIngredient);

  }

}
