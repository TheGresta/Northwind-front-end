import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel } from '../models/loginModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { TokenModel } from '../models/tokenModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = 'https://localhost:44372/api/auth/';
  constructor(private httpCliet:HttpClient) { }

  login(loginModel:LoginModel){
    return this.httpCliet.post<SingleResponseModel<TokenModel>>(this.apiUrl+"login", loginModel)
  }

  isAuthenticated(){
    if(localStorage.getItem("token"))
      return true;
    return false;
  }
}
