import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'controle-agendamento';
  agendamentos="A G E N D A M E N T O S";

  showHeader: boolean = true;
  showFooter:boolean=true;
  constructor(private router: Router) {
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        if (val.url == '/cadastrar' || val.url == '/entrar' || val.url == '/entrar/agendar' ) {
          this.showHeader = false;
          this.showFooter = false;
        } else {
          this.showHeader = true;
          this.showFooter = true;
        }
      }
    });
  }
  
}
