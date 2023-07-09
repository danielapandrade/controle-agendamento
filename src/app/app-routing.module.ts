import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { DescricaoMaterialComponent } from './descricao-material/descricao-material.component';

const routes: Routes = [{path:'', component: MainPageComponent}, {path:'cadastrar', component: CadastrarComponent},
{ path: "main-page/:material", component: DescricaoMaterialComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
