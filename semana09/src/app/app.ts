import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponenteDos } from './components/componente-dos/componente-dos';

@Component({
  imports: [ ComponenteDos],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('semana09');
}
