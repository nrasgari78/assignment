import { Component, OnInit } from '@angular/core';
import {LoginSrvService} from "../../srv/login-srv.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  todayISOString : string = new Date().toISOString();

  constructor(private loginSrv:LoginSrvService,
              private router:Router,
  ) { }

  ngOnInit(): void {


  }

  LoginFun(user:string,pass:string) {
  this.loginSrv.LogSrv(user,pass).subscribe(res=>{
  if(res)
    if(this.todayISOString<res.expiration)
    localStorage.setItem('token',res.token)
    this.router.navigate(['part1'])
    this.loginSrv.setDataToBack(user,res.expiration)

  }


)

  }
}
