import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { ListComponent } from './components/list/list.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardComponent, ListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'avaliacao';

  listRec = []; 
  onNewList(value: []) {
    this.listRec = value;
  }
}
