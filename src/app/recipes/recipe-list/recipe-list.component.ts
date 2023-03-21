import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Reciepe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit
{
@Output() recipeWasSelected = new EventEmitter<Reciepe>();
  recipes:Reciepe[] = [
    new Reciepe('A test Recipe','This is simply a test recipe','https://thumbs.dreamstime.com/b/pasta-arabbiata-25793698.jpg'),
    new Reciepe('Chocolate Cake','This is simply a test recipe','https://images.unsplash.com/photo-1626263468007-a9e0cf83f1ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNob2NvbGF0ZSUyMGNha2V8ZW58MHx8MHx8&w=1000&q=80'),

  ];

  ngOnInit(): void {
  }

  onRecipeSelected(recipe:Reciepe){
  this.recipeWasSelected.emit(recipe);
  }

}
