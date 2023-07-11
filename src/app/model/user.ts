export class User {
    id!: string;
    nome?: string;
    cpf: string;
    mail: string;
    senha: string;
    constructor(nome: string, cpf: string, senha: string, mail: string ) {
      this.id = String(Math.round(Math.random() * 1000));
      this.nome = nome;
      this.cpf = cpf;
      this.senha = senha;
      this.mail = mail;
      
    }
  
   
  }