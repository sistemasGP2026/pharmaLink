import { Component, signal } from '@angular/core';
import { SgiComponent } from './sgi-component/sgi-component';
import { RouterLink, RouterOutlet } from "@angular/router";
import { MascotaFlotante } from './mascota-flotante/mascota-flotante';

@Component({
  selector: 'app-root',
  standalone: true,
  imports:[RouterOutlet, MascotaFlotante],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('lanzador_GP');
}
