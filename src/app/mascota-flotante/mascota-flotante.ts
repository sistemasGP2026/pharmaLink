import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'mascota-flotante',
  imports: [CommonModule],
  templateUrl: './mascota-flotante.html',
  styleUrl: './mascota-flotante.css',
})
export class MascotaFlotante {

  mostrarMensaje: boolean = false;

  toggleMensaje() {
    this.mostrarMensaje = !this.mostrarMensaje;
  }

  cerrarMensaje() {
    this.mostrarMensaje = false;
  }


}
