import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";
import {ShoppingListServices} from "../../../services/shopping-list.services";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit{

  @ViewChild('nameInput',{static:false}) nameInputRef : ElementRef;
  @ViewChild('amountInput',{static:false}) amountInputRef : ElementRef;

  onAddItem(e){

    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = +this.amountInputRef.nativeElement.value;
    e.preventDefault();
    const newIngredient = new Ingredient(ingName,ingAmount);
    console.log(ingName+" "+ingAmount);
    this.slService.addIngredient(newIngredient);

  }

  constructor(private slService : ShoppingListServices) {

  }
  ngOnInit(){
  }

}
