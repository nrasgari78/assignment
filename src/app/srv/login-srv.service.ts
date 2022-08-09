import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class LoginSrvService {
baseurl:string=environment.apiUrl
  constructor(private http:HttpClient) { }
LogSrv(user:string,pass:string){
    const data={
      'userName':user,
      'userPass':pass
    }
  const headerDict = {
    'Content-Type': 'application/json',
  }
  const body=JSON.stringify(data)
  return this.http.post<any>(this.baseurl+'/api/Auth/login',body)

}
}
