import { Component } from '@angular/core';
import { Agendamento } from '../../model/agendamento';
import { AgendamentoService } from '../../services/agendamento.service';
import { FormControl, NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cadastrar-agendamento',
  templateUrl: './cadastrar-agendamento.component.html',
  styleUrls: ['./cadastrar-agendamento.component.css']
})
export class CadastrarAgendamentoComponent {

  agendamento = {} as Agendamento;
  agendamentos: Agendamento[];
  apiUrl = '';
  materialList: any[] = [];
  public isVisible: boolean = false;

  
  constructor(private agendamentoService: AgendamentoService, private route: ActivatedRoute, private http: HttpClient) { }

  date = new Date();
  
  ngOnInit() {
    this.getAgendamentos();


  }

  saveAuditorio(agendamento: Agendamento) {
    agendamento.item = "Auditório";
    this.agendamento = { ...agendamento };
    this.agendamentoService.saveAgendamento(this.agendamento).subscribe(() => {

    });

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

  
  showAlert() : void {
    if (this.isVisible) { 
      return;
    } 
    this.isVisible = true;
    setTimeout(()=> this.isVisible = false,2500)
  }








}
