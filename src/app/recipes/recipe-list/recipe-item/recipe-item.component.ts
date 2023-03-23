import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Reciepe} from "../../recipe.model";
import {RecipeServices} from "../../../../services/recipe.services";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
  providers:[RecipeServices]
})
export class RecipeItemComponent implements OnInit{
  @Input() recipe:Reciepe;


  constructor(private recipeService : RecipeServices) {
  }
  onSelected(){
     this.recipeService.recipeSelected.emit(this.recipe);
     console.log(this.recipe);
     console.log("Event is emitted");
  }

  ngOnInit(){
  }




}
