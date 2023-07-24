import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceListService {
  constructor() { }
}
export function listadoDatos(datas:any){  
  librosDeLectura.push(datas)
  return "funciona"
}

const librosDeLectura:any[]=[]

export {librosDeLectura}