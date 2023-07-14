export interface Agendamento {
   
    id: number;
    data: string;
    item:string;
    horarioInicio:string;
    horarioFim:string;
    turno:string;
    local:string;
    status:string;
    isEdit:boolean;
    
    
}