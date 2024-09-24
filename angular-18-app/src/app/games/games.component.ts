import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './games.component.html',
  styleUrl: './games.component.css'
})

export class GamesComponent {
  //Hay que importar el decorador en @angular/core para poder usarlo
  @Input() username: string = '';
  @Output() addFavoriteEvent = new EventEmitter<string>();

  fav(gameName: string){
    this.addFavoriteEvent.emit(gameName);
    //alert(`A ${this.username} le gusta jugar a ${gameName}`);
  }

  games = [
    {
      id: 1,
      name: 'Uncharted'
    },
    {
      id: 2,
      name: 'Uncharted 2'
    },
    {
      id: 3,
      name: 'Uncharted 3'
    }    
  ]
}
