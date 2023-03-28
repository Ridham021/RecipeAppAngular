import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, tap} from "rxjs/operators";
import {BehaviorSubject, Subject, throwError} from "rxjs";
import {User} from "./user.model";
import {Router} from "@angular/router";

export interface AuthResPonseData{
  kind:string;
  idToken:string;
  email:string;
  refreshToken : string;
  expiresIn : string;
  localId : string;
  registered?:boolean;

}

@Injectable({providedIn : 'root'})
export class AuthService{

  private tokenExpirationTimer :any;
 user = new BehaviorSubject<User>(null);
  constructor(private http : HttpClient , private router : Router) {
  }
  signup(email:string , password : string){
      return this.http.post<AuthResPonseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDAH6Meprwx1wMRRckc6J3mkHvR4-1yQH0',
        {
          email : email,
          password : password,
          returnSecureToken : true
        }).pipe(catchError(this.handleError),tap(resData => {
          this.handleAuthentication(
            resData.email,
            resData.localId,
            resData.idToken,
            +resData.expiresIn
          )
      }));
  }


  private handleAuthentication(email:string ,userId: string ,  token:string , expiresIn:number){
    const expirationData = new Date(new Date().getTime()+ expiresIn*1000);
    const user = new User(email,userId,token,expirationData);
    // console.log(user);
    this.user.next(user);
    this.autoLogout(expiresIn*1000);
    localStorage.setItem('userData' , JSON.stringify(user));
  }

  autoLogin(){
    const userData : {
      email : string;
      id: string;
      _token : string;
      _tokenExpirationDate : string;
    } = JSON.parse(localStorage.getItem('userData'));
    if(!userData){
      return;
    }

    const loadedUser = new User(userData.email,userData.id,userData._token,new Date(userData._tokenExpirationDate));

    if(loadedUser.token){
      this.user.next(loadedUser);
      const expirationDuration = new Date(userData._tokenExpirationDate).getTime() - new Date().getTime() ;
      this.autoLogout(expirationDuration);


    }

  }

  login(email:string , password : string){
    return this.http.post<AuthResPonseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDAH6Meprwx1wMRRckc6J3mkHvR4-1yQH0',
      {
        email : email,
        password : password,
        returnSecureToken : true
      } ).pipe(catchError(this.handleError),tap(resData => {
      this.handleAuthentication(
        resData.email,
        resData.localId,
        resData.idToken,
        +resData.expiresIn
      )
    }));
  }

  logout(){
    this.user.next(null);
    console.log('logged out......');
    this.router.navigate(['/auth']);
    localStorage.removeItem('userData');
    if(this.tokenExpirationTimer){
       clearTimeout(this.tokenExpirationTimer);
    }
    this.tokenExpirationTimer = null;
  }

  autoLogout(expirationDuration : number){
    console.log(expirationDuration)
    this.tokenExpirationTimer = setTimeout(() => {
      this.logout();
    },expirationDuration);

  }

  private handleError(errorRes: HttpErrorResponse){
    let errorMessage = 'An Unknown error occured!';
    if(!errorRes.error || !errorRes.error.error){
      return throwError(errorMessage);
    }
    switch (errorRes.error.error.message){
      case 'EMAIL_EXISTS':
        errorMessage = 'This email exists';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage='Email not found!!';
        break;
      case 'INVALID_PASSWORD':
        errorMessage='Invalid password!!!!';
        break;
    }
    return throwError(errorMessage);
  }

}
