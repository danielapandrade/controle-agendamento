import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  @Input()
  fraseBoasVindas:string="";
  fraseSistemaAgendemento:string="sistema de agendamentos da universidade!";

}
