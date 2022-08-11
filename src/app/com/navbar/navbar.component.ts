import {Component, OnInit} from '@angular/core';
import {LoginSrvService} from "../../srv/login-srv.service";
import {formatDate} from "@angular/common";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  userInfo=''
  fDate:string=''
  constructor(private loginsrv:LoginSrvService) {
  }
  ngOnInit() {
    this.userInfo=this.loginsrv.getDataTOBAck()
    const array=this.userInfo.split('*',2)
    this.userInfo=array[0]
  }

}


