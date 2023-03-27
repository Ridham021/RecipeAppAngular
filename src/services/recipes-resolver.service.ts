import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Reciepe} from "../app/recipes/recipe.model";
import {DataStorageService} from "./data-storage.service";
import {Observable} from "rxjs";
import {RecipeServices} from "./recipe.services";

@Injectable({providedIn:'root'})
export class RecipesResolverService implements Resolve<Reciepe[]>{

  constructor(private dataStorageService : DataStorageService ,
              private recipeService : RecipeServices) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Reciepe[]> | Promise<Reciepe[]> | Reciepe[] {
    const recipes = this.recipeService.getRecipes();

    if(recipes.length == 0){
      return this.dataStorageService.onFetchRecipes();
    }
    else {
      return recipes;
    }

  }


}
