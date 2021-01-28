import { CommonModule } from "@angular/common";
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from "@angular/core";
import { SigninComponent } from "./signin/signin.component";
import { SignupComponent } from "./signup/signup.component";

@NgModule({
  declarations: [
    SigninComponent,
    SignupComponent
  ],
  imports:[
    CommonModule,
    HttpClientModule
  ]

})
export class HomeModule{

}
