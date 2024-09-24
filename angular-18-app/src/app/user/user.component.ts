import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesComponent } from '../games/games.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, GamesComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
username = 'Rober';
isLoggedIn = false; // => Está funcionando como un state.
favGame = '';

greet(){
  alert("Hola");
}

getFavourite(gameName: string){
  this.favGame = gameName;
}
}
