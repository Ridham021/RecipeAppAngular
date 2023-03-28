import {NgModule} from "@angular/core";
import {ShoppingListComponent} from "./shopping-list.component";
import {ShoppingEditComponent} from "./shopping-edit/shopping-edit.component";
import {RouterModule} from "@angular/router";
import {BrowserModule} from "@angular/platform-browser";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {RecipesModule} from "../recipes/recipes.module";
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations:[
    ShoppingListComponent,
    ShoppingEditComponent
  ],
  imports : [
    RouterModule.forChild([
      {path: 'shopping-list', component: ShoppingListComponent},
    ]),
    BrowserModule,
    SharedModule ,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RecipesModule
  ],
  exports : [
    ShoppingListComponent,
    ShoppingEditComponent
  ]
})
export class ShoppingListModule{

}
