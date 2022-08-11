import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './com/login/login.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {HeaderInterceptor} from "../utility/HeaderInterceptor";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './com/navbar/navbar.component';
import { ErrorComponent } from './com/error-component/error-component.component';
import { NgxMaskModule, IConfig } from 'ngx-mask';
const maskConfig: Partial<IConfig> = {
  validation: false,
};
import {SharedModule} from "./shared/shared.module";
import {Router} from "@angular/router";
import {LoginSrvService} from "./srv/login-srv.service";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    ErrorComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxMaskModule.forRoot(maskConfig),
    SharedModule,


  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useFactory: function (router: Router) {
        return new HeaderInterceptor(router);
      },
      multi: true,
      deps: [Router]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
