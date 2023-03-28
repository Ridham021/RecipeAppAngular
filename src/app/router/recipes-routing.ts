import {NgModule} from "@angular/core";
import {Router, RouterModule, Routes} from "@angular/router";
import {RecipesComponent} from "../recipes/recipes.component";
import {AuthGuard} from "../auth/auth.guard";
import {RecipeStartComponent} from "../recipes/recipe-start/recipe-start.component";
import {RecipeEditComponent} from "../recipes/recipe-edit/recipe-edit.component";
import {RecipeDetailsComponent} from "../recipes/recipe-details/recipe-details.component";
import {RecipesResolverService} from "../../services/recipes-resolver.service";

const routes : Routes =
  [
    {
      path: 'recipes', component: RecipesComponent,canActivate:[AuthGuard], children: [
        {path: '', component: RecipeStartComponent},
        {path: 'new', component: RecipeEditComponent},
        {path: ':id', component: RecipeDetailsComponent , resolve:[RecipesResolverService]},

        {path:':id/edit' , component:RecipeEditComponent, resolve:[RecipesResolverService]}
      ]
    },
  ];
@NgModule({
imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class RecipesRouting{

}
