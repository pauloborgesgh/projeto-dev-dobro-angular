import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {BuscarComponent} from './components/buscar/buscar.component';
import {MainComponent} from './components/main/main.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BuscarComponent, MainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'magic-dev';
}
