import {Component, OnInit} from "@angular/core";
import {NgForm} from "@angular/forms";
import {AuthResPonseData, AuthService} from "./auth.service";
import {Observable} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})
export class AuthComponent implements OnInit {

  isLogginMode = true;
  isLoading =   false;
  error : string = null;


  constructor(private authService: AuthService,
              private router : Router) {
  }

  onSwitchMode() {
    this.isLogginMode = !this.isLogginMode;
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;

    let authObs : Observable<AuthResPonseData>;

        this.isLoading = true;
    if (this.isLogginMode) {
      authObs = this.authService.login(email,password);

    } else {
      authObs = this.authService.signup(email, password);

      form.reset();
    }

    authObs.subscribe(
      resData => {
        this.isLoading  = false;
        this.router.navigate(['/recipes']);
      }, errorRes => {

        this.error = 'An error occured!';
        console.log("error occured...");
        this.isLoading = false;
        this.error = errorRes
        console.log(errorRes);
      }
    );
  }



  ngOnInit() {

  }

}
