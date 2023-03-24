import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Reciepe} from "../../recipe.model";
import {RecipeServices} from "../../../../services/recipe.services";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
  // providers:[RecipeServices]
})
export class RecipeItemComponent implements OnInit{
   @Input() recipe:Reciepe;
   @Input() index:number;

  ngOnInit(){
  }




}
