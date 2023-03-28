import {Component, OnDestroy, OnInit} from '@angular/core';
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListServices} from "../../services/shopping-list.services";
import {Subscription} from "rxjs";
import {LoggingService} from "../logging.service";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit,OnDestroy{
  ingredients:Ingredient[] = [];
  private igChangeSub : Subscription;

  onEditItem(index:number){
    this.slService.startedEditing.next(index);
  }
  ngOnInit(): void {
    this.ingredients = this.slService.getIngredients();
    this.igChangeSub = this.slService.ingredientsChanged.subscribe(
      (ingredients : Ingredient[]) => {
        this.ingredients = ingredients;
      }
    )
    this.loggingService.printlog("This is from Shopping-list Component");
  }
  constructor(private slService : ShoppingListServices , private loggingService : LoggingService) {
  }

  ngOnDestroy(){
    this.igChangeSub.unsubscribe();
  }
}
