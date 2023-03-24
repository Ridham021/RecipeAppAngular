import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Reciepe} from "../recipe.model";
import {RecipeServices} from "../../../services/recipe.services";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
  // providers:[RecipeServices]
})
export class RecipeListComponent implements OnInit
{

  recipes:Reciepe[];



  constructor(private recipeService : RecipeServices ,
              private router : Router,
              private activatedRouter : ActivatedRoute) {
  }
  ngOnInit(){
     this.recipes = this.recipeService.getRecipes();

  }

  onNewRecipe(){

    this.router.navigate(['new' ], {relativeTo : this.activatedRouter} );

  }






}
