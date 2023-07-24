import { Component } from '@angular/core';
import data from '../assets/books.json';
import { listadoDatos } from './services/service-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'reading-list'; 
  datas = data.library;  
  rangeVar: string = "";
  tipoPelicula : string = "";
  rangeValue : number = 2000;
  libroLectura : Array<{ book: { title: string; pages: number; genre: string; cover: string; synopsis: string; year: number; ISBN: string; author: { name: string; otherBooks: string[]; }; }; }> = []
  

  constructor(){}  
  
  changeRange(value: any, ref: HTMLInputElement) {    
    ref.value = value.target.value;
    this.rangeValue = value.target.value;
    this.datas = data.library.filter(dt => dt.book.pages <= this.rangeValue ||  dt.book.genre == this.tipoPelicula);
  }
  filterTipo(value : any){
    const  nombre  = value.target.value;
    this.tipoPelicula = nombre  
    this.datas = data.library.filter(dt => dt.book.genre == this.tipoPelicula);
  } 
  addList(name : string,indice : number) {
    this.libroLectura = data.library.filter(dt => dt.book.title == name)        
    listadoDatos(this.libroLectura[0])
    this.datas.splice(indice,1)
  }
  
}

