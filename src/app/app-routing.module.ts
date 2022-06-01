import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainLayoutsComponent} from "./layout/main-layouts/main-layouts.component";
import {MoviesComponent} from "./components/movies/movies.component";


const routes: Routes = [
  {
    path:'',component:MainLayoutsComponent,children:[

      { path:'',redirectTo: 'movie',pathMatch:'full'},

      {
        path:'movie', component:MoviesComponent,children:[]
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
