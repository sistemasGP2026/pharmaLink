import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BackToHome } from '../back-to-home/back-to-home';

@Component({
  selector: 'app-mantenimiento-page',
  standalone: true,
  imports: [RouterModule, BackToHome],
  templateUrl: './mantenimiento-page.html',
  styleUrl: './mantenimiento-page.css',
})
export class MantenimientoPage {
linksTrabajo: any[] = [
  { name: 'Metrocaribe', url: 'https://metrocaribe.com/acceso-de-clientes/', img: 'assets/links/metrocaribe.png' },
  { name: 'Met&cal', url: 'https://mls.metandcal.com/login', img: 'assets/links/metandcal.png' },
];
}
