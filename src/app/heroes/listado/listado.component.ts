import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
   heroes: string[] = ['Goku','Vegeta','Num 17', 'Freezer', 'Majin Boo'];
   heroeBorrado: string='';
  borrarHeroe(){
    this.heroeBorrado = this.heroes.pop() || '';
    //this.heroes.shift();
    //this.heroes=[];
  }
  
  
   constructor() { }

  ngOnInit(): void {
  }

}
