import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BackToHome } from '../back-to-home/back-to-home';

@Component({
  selector: 'cedi-page',
  standalone: true,
  imports: [RouterModule, BackToHome],
  templateUrl: './cedi-page.html',
  styleUrl: './cedi-page.css',
})
export class CediPage {
linksTrabajo: any[] = [
  { name: 'Revisión de registros INVIMA', url: 'https://consultaregistro.invima.gov.co/Consultas/consultas/consreg_encabcum.jsp', img: 'assets/links/registros_invima.png' },
  { name: 'Revisión de alertas sanitarias INVIMA.', url: 'https://app.invima.gov.co/alertas/medicamentos-productos-biologicos', img: 'assets/links/alertas_invima.png' },
  // { name: 'Intranet', url: 'https://sites.google.com/gestionpharma.com.co/intranet/inicio?authuser=0', img: 'assets/links/intranet.png'},
  // { name: 'Aplicativo de tickets', url: 'https://calidadgestionpharma.tech-q.net/scp/login.php', img: 'assets/links/tickets.png'},
  { name: 'SAFE', url: 'https://safe2.prixmasol.com/Home/Login', img: 'assets/links/safe.png' },
  {name: 'Medicamentos vitales no disponibles', url: 'https://www.invima.gov.co/productos-vigilados/medicamentos-y-productos-biologicos/medicamentos-vitales-no-disponibles', img: 'assets/links/medicamentos_vitales.png' },
];
}
