import {Component, Input, OnInit} from '@angular/core';
import {Reciepe} from "../recipe.model";
import {RecipeServices} from "../../../services/recipe.services";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css'],
  // providers : [RecipeServices]
})
export class RecipeDetailsComponent implements OnInit {


  constructor(private recipeService : RecipeServices ,
              private activatedRoute : ActivatedRoute ,
              private router : Router) {


  }
  recipe:Reciepe;
  @Input() id:number;


  ngOnInit(){
       this.activatedRoute.params
         .subscribe(
           (params : Params) => {
             this.id = +params['id'];
             this.recipe = this.recipeService.getRecipe(this.id);
             console.log(this.id);
           }
         )
  }

  onAddToShoppingList(){
        this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }
  onEditRecipe(){
    this.router.navigate(['edit' ], {relativeTo : this.activatedRoute} );
  }
  onDeleteRecipe(){
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['/recipes'])
  }


}
