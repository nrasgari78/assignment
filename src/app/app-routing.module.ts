import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./com/login/login.component";
import {NavbarComponent} from "./com/navbar/navbar.component";
import {ErrorComponent} from "./com/error-component/error-component.component";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', component: LoginComponent},
  {path: '', component: NavbarComponent,
    children: [
      {path: 'part1', loadChildren: () => import('./com/part1/part1.module').then(m => m.Part1Module)},
      {path: '**', pathMatch: 'full', component:ErrorComponent },

    ]
}
  // {
  //   path: '', component: LoginComponent,
  //   children: [
  //     {path: 'part1', loadChildren: () => import('./com/part1/part1.module').then(m => m.Part1Module)}
  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
