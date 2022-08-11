import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Subscriber} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginSrvService {
  private readonly _Back = new BehaviorSubject<string>('');
  constructor(private http:HttpClient) { }
LogSrv(user:string,pass:string){
    const data={
      'userName':user,
      'userPass':pass
    }

  const body=JSON.stringify(data)
  return this.http.post<any>('/api/Auth/login',body)

}
  setDataToBack(val: string,date:string) {
    this._Back.next('')
    this._Back.next( this._Back.getValue().concat(val,'*'+date));

  }
  getDataTOBAck(): string {

    return this._Back.getValue();
  }


}
