import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input()
  produto:string = 'Pastel de ';

  @Input()
  sabor:string = ''

  @Input()
  preco:string = '';

}
