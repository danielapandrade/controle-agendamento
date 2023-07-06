import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';

const routes: Routes = [{path:'', component: MainPageComponent}, {path:'cadastrar', component: CadastrarComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
