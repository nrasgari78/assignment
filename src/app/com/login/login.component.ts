import { Component, OnInit } from '@angular/core';
import {LoginSrvService} from "../../srv/login-srv.service";
import {Router} from "@angular/router";
import Swal from "sweetalert2";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginSrv:LoginSrvService,
              private router:Router,
  ) { }

  ngOnInit(): void {


  }

  LoginFun(user:string,pass:string) {
  this.loginSrv.LogSrv(user,pass).subscribe(res=>{
  if(res) {
    localStorage.setItem('token', res.token)
    this.router.navigate(['part1'])
    this.loginSrv.setDataToBack(user, res.expiration)
  }
  },error =>

    Swal.fire({icon: 'error', text: 'نام کاربری یا کلمه عبور اشتباه است'})

)

  }
}
