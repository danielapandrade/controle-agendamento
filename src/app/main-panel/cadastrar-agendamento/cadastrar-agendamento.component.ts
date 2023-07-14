import { Component } from '@angular/core';
import { Agendamento } from '../../model/agendamento';
import { AgendamentoService } from '../../services/agendamento.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cadastrar-agendamento',
  templateUrl: './cadastrar-agendamento.component.html',
  styleUrls: ['./cadastrar-agendamento.component.css']
})
export class CadastrarAgendamentoComponent {

  agendamento = {} as Agendamento;
  agendamentos: Agendamento [];

  constructor(private agendamentoService: AgendamentoService) {}
  
  ngOnInit() {
    this.getAgendamentos();
  }

  saveAgendamento(form: NgForm) {
    if (this.agendamento.id !== undefined) {
      this.agendamentoService.updateAgendamento(this.agendamento).subscribe(() => {
        this.cleanForm(form);
      });
    } else {
      this.agendamentoService.saveAgendamento(this.agendamento).subscribe(() => {
        this.cleanForm(form);
      });
    }
  }

  getAgendamentos() {
    this.agendamentoService.getAgendamentos().subscribe((agendamentos: Agendamento[]) => {
      this.agendamentos = agendamentos;
    });
  }

  cleanForm(form: NgForm) {
    this.getAgendamentos();
    form.resetForm();
    this.agendamento = {} as Agendamento;
  }

}
