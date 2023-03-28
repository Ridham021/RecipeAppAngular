import {NgModule} from "@angular/core";
import {LoadingSpinnerComponent} from "../loading-spinner/loading-spinner.component";
import {AlertComponent} from "./alert.component";
import {DropdownDirectiveDirective} from "./dropdown-directive.directive";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations : [
    LoadingSpinnerComponent,
    AlertComponent,
    DropdownDirectiveDirective,
  ],
  imports : [
    CommonModule
  ],
  exports : [
    LoadingSpinnerComponent,
    AlertComponent,
    DropdownDirectiveDirective,
    CommonModule
  ]

})
export class SharedModule{

}
