import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Agendamento } from '../model/agendamento';



@Injectable({
  providedIn: 'root'
})
export class AgendamentoService {

  


  url = 'http://localhost:3000/agendamentos'; 
  item: any;

  constructor(private httpClient: HttpClient) { }



 
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }





 
  getAgendamentos(): Observable<Agendamento[]> {
    return this.httpClient.get<Agendamento[]>(this.url)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }


 
  getAgendamentoById(id: number): Observable<Agendamento> {
    return this.httpClient.get<Agendamento>(this.url + '/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }


  saveAgendamento(agendamento: Agendamento): Observable<Agendamento> {
    agendamento.status="Aguardando autorização"
    
    return this.httpClient.post<Agendamento>(this.url, JSON.stringify(agendamento), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

 
  updateAgendamento(agendamento: Agendamento): Observable<Agendamento> {
    return this.httpClient.put<Agendamento>(this.url + '/' + agendamento.id, JSON.stringify(agendamento), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }


  deleteAgendamento(agendamento: Agendamento) {
    return this.httpClient.delete<Agendamento>(this.url + '/' + agendamento.id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // Manipulação de erros
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };

}