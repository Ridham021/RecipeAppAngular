import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {RecipesComponent} from "../recipes/recipes.component";
import {ShoppingListComponent} from "../shopping-list/shopping-list.component";
import {RecipeStartComponent} from "../recipes/recipe-start/recipe-start.component";
import {RecipeDetailsComponent} from "../recipes/recipe-details/recipe-details.component";
import {RecipeEditComponent} from "../recipes/recipe-edit/recipe-edit.component";
import {RecipesResolverService} from "../../services/recipes-resolver.service";
import {AuthComponent} from "../auth/auth.component";
import {AuthGuard} from "../auth/auth.guard";
import {RecipesRouting} from "./recipes-routing";
import {RecipesModule} from "../recipes/recipes.module";
import {SharedModule} from "../shared/shared.module";

const appRoutes: Routes = [
  {path: '', redirectTo: '/recipes', pathMatch: 'full'},



];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes), SharedModule],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
