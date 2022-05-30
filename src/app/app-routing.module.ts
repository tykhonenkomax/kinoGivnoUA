import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainLayoutsComponent} from "./layout/main-layouts/main-layouts.component";

const routes: Routes = [
  {
    path:'',component:MainLayoutsComponent,children:[]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
