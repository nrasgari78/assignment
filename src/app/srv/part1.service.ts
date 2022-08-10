import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class Part1Service {
folderid=0o201
  constructor(private http: HttpClient) {
  }

  GetGrid():Observable<any> {
    let params = new HttpParams().set('folderId', '000000000201');

    return this.http.get<any>('/api/FolderData/getGrid',{params})
  }
  GetCoding(search:string){
  console.log(search)
  let params=new HttpParams()
    .set('codingId','PRSACC05')
    .set('search',search)
    return this.http.get<any>('/api/Coding/codingGetList',{params})
  }
}
