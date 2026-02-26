import { Component } from '@angular/core';
import { BackToHome } from '../back-to-home/back-to-home';

@Component({
  selector: 'app-contabilidad-page',
  standalone: true,
  imports: [BackToHome],
  templateUrl: './contabilidad-page.html',
  styleUrl: './contabilidad-page.css',
})
export class ContabilidadPage {
linksTrabajo: any[] = [
  { name: 'Certificado supernotaria', url: 'https://certificados.supernotariado.gov.co/certificado', img: 'assets/links/certificado_supernotaria.png' },
  { name: 'DIAN', url: 'https://www.dian.gov.co/', img: 'assets/links/dian.png' },
  { name: 'Muisca DIAN', url: 'https://muisca.dian.gov.co/WebIdentidadLogin/', img: 'assets/links/muisca_dian.png' },
  { name: 'EAC DANE', url: 'https://frmweb.dane.gov.co/EACApp-EACViewController-context-root/faces/login.xhtml?Adf-Window-Id=w0&_afrLoop=5538072805988453&_afrRedirect=5538072870000142&_afrWindowMode=2&_adf.ctrl-state=r21t3sgd7_3', img: 'assets/links/eac_dane.png'},
  { name: 'Superintencia de sociedades', url: 'https://www.supersociedades.gov.co/es/web/guest/servicios-digitales', img: 'assets/links/superintencia_sociedades.png'},
  { name: 'Portal tributario Cartagena', url: 'https://portaltributario.cartagena.gov.co/', img: 'assets/links/portal_tributario.png'},
  { name: 'Oficina de impuestos Santa Marta', url: 'https://www.santamarta.gov.co/tags/oficina-de-impuestos', img: 'assets/links/impuestos_sm.png' },
];
}
