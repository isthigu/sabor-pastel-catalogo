import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  @Input()
  testea:string = '';



  constructor(){
  }

  public tst(){
    console.log('works');
  }

}
