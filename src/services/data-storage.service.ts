import {Injectable} from "@angular/core";
import {HttpClient, HttpClientModule, HttpParams} from "@angular/common/http";
import {RecipeServices} from "./recipe.services";
import {Reciepe} from "../app/recipes/recipe.model";
import {exhaustMap, map, take, tap} from "rxjs/operators";
import {AuthComponent} from "../app/auth/auth.component";
import {BehaviorSubject, Subject} from "rxjs";
import {User} from "../app/auth/user.model";
import {AuthService} from "../app/auth/auth.service";

@Injectable({providedIn: 'root'})
export class DataStorageService {

  user = new BehaviorSubject<User>(null)
  token: string = null;


  constructor(private http: HttpClient, private recipeService: RecipeServices,
              private authService: AuthService) {

  }

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http.put('https://recipeapp-a6eab-default-rtdb.firebaseio.com/recipes.json', recipes)
      .subscribe(response => {
        console.log(response);
      });
  }

  // onFetchRecipes() {
  //
  //   return this.authService.user.pipe((take(1)), exhaustMap(user => {
  //     console.log(user);
  //     return this.http.get<Reciepe[]>('https://recipeapp-a6eab-default-rtdb.firebaseio.com/recipes.json')
  //   }), map(recipes => {
  //     return recipes.map(recipe => {
  //       return {...recipe, ingredients: recipe.ingredients ? recipe.ingredients : []};
  //     });
  //   }), tap(recipes => {
  //     this.recipeService.setRecipes(recipes);
  //   }));
  //
  //
  // }

  onFetchRecipes() {


    return this.http.get<Reciepe[]>('https://recipeapp-a6eab-default-rtdb.firebaseio.com/recipes.json')
      .pipe(map(recipes => {
        return recipes.map(recipe => {
          return {...recipe, ingredients: recipe.ingredients ? recipe.ingredients : []};
        });
      }), tap(recipes => {
        this.recipeService.setRecipes(recipes);
      }));


  }
}
