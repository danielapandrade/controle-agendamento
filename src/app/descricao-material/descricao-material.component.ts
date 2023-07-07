import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-descricao-material',
  templateUrl: './descricao-material.component.html',
  styleUrls: ['./descricao-material.component.css']
})
export class DescricaoMaterialComponent {
  material: string | null;
  descricao: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

   
    this.route.paramMap.subscribe(params => {
      this.material =  this.route.snapshot.paramMap.get('material');
    })

    if(this.material==='auditorio'){
      this.descricao='Auditório com capacidade para em torno de 250 pessoas.'
    }
    
    if(this.material==='projetor'){
      this.descricao='Projetor epson com saída de áudio, HDMI e outros recursos.'
    }

    if(this.material==='som'){
      this.descricao='Microfones, caixas de som e outros recursos.'
    }
    

    if(this.material==='eletronico'){
      this.descricao='Cabos HDMI, periféricos de entrada/saída e outros recursos.'
    }
  }
}


