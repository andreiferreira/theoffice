import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";


const API_URL = "http://localhost/3000";
@Injectable({
  providedIn:'root'
})
export class SigninService{
  constructor(private http: HttpClient){}


  getUser(){

  }

}
