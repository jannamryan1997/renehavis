import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainView } from './com/annaniks/renehavis/views/main/main.view';

const routes: Routes = [
  {path:"",redirectTo:"main",pathMatch:"full"},
  { path: 'main', loadChildren: 'src/app/com/annaniks/renehavis/views/main/main.module#MainModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
