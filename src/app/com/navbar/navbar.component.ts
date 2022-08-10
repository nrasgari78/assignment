import {Component, OnInit} from '@angular/core';
import {LoginSrvService} from "../../srv/login-srv.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  userInfo=''
  Fdate='1400/05/20'
  constructor(private loginsrv:LoginSrvService) {
  }
  ngOnInit() {
    this.userInfo=this.loginsrv.getDataTOBAck()
  }

}


