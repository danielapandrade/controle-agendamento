import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { DescricaoMaterialComponent } from './descricao-material/descricao-material.component';
import { MainPanelComponent } from './main-panel/main-panel.component';
import { CadastrarAgendamentoComponent } from './main-panel/cadastrar-agendamento/cadastrar-agendamento.component';

const routes: Routes = [{path:'', component: MainPageComponent}, {path:'cadastrar', component: CadastrarComponent},
{path: "main-page/:material", component: DescricaoMaterialComponent },
{path:'entrar', component:MainPanelComponent}, {path:"entrar/agendar", component:CadastrarAgendamentoComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
