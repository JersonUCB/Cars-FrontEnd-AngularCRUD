import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  resultadoBuscador():string {
    return (<HTMLInputElement>document.getElementById('buscado')).value;
  }

}
