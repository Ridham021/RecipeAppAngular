import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {Reciepe} from "../recipe.model";
import {RecipeServices} from "../../../services/recipe.services";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
  // providers:[RecipeServices]
})
export class RecipeListComponent implements OnInit , OnDestroy
{

  recipes:Reciepe[];
   subscription : Subscription;


  constructor(private recipeService : RecipeServices ,
              private router : Router,
              private activatedRouter : ActivatedRoute) {
  }
  ngOnInit(){
   this.subscription =  this.recipeService.recipesChanged.subscribe(
      (recipes : Reciepe[]) => {
        this.recipes = recipes;
    }
    )
     this.recipes = this.recipeService.getRecipes();

  }

  onNewRecipe(){

    this.router.navigate(['new' ], {relativeTo : this.activatedRouter} );

  }

  ngOnDestroy(){
   this.subscription.unsubscribe();
  }






}
