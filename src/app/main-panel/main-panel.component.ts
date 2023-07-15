import { Component } from '@angular/core';
import { Agendamento } from '../model/agendamento';
import { AgendamentoService } from '../services/agendamento.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { elementAt } from 'rxjs';

@Component({
  selector: 'app-main-panel',
  templateUrl: './main-panel.component.html',
  styleUrls: ['./main-panel.component.css']
})
export class MainPanelComponent {

  public paginaAtual = 1;

  agendamento = {} as Agendamento;
  agendamentos: Agendamento[];
  editar = "Editar";
  formAgendamento: NgForm;
  isVisible = false;

  constructor(private agendamentoService: AgendamentoService) {

  }

  ngOnInit() {
    this.getAgendamentos();

  }

  formatsDateTest: string[] = ['dd/MM/yyyy'];

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

  deleteAgendamento(agendamento: Agendamento) {
    this.agendamentoService.deleteAgendamento(agendamento).subscribe(() => {
      this.getAgendamentos();
    });
  }

  editAgendamento(agendamento: Agendamento) {
    this.agendamento = { ...agendamento };
  }

  cleanForm(form: NgForm) {
    this.getAgendamentos();
    form.resetForm();
    this.agendamento = {} as Agendamento;
  }

  editarItem(item: Agendamento) {
    item.isEdit = true;
  }

  onEdit(item: Agendamento) {

    item.isEdit = false;
    this.agendamento = { ...item }
    this.agendamentoService.updateAgendamento(this.agendamento).subscribe(() => {
      this.cleanForm(this.formAgendamento);

    });


  }



}
