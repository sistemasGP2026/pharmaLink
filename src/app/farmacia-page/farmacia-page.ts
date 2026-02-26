import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BackToHome } from '../back-to-home/back-to-home';

@Component({
  selector: 'farmacia-page',
  standalone: true,
  imports: [RouterModule, BackToHome],
  templateUrl: './farmacia-page.html',
  styleUrl: './farmacia-page.css',
})
export class FarmaciaPage {
linksTrabajo: any[] = [
  { name: 'Modulo farmacia', url: 'http://10.10.1.15:3000/login', img: 'assets/links/modulo_farmacia.png' },
  { name: 'SIOS', url: 'http://10.10.1.248/sios/', img: 'assets/links/sios.png' },
  { name: 'SIOS gerencial', url: 'http://10.10.1.248/GERENCIAL/INDEX.ASPX', img: 'assets/links/sios_gerencial.png' },
  { name: 'SIOS historia clinica', url: 'http://10.10.1.248/sios/Inicio.aspx', img: 'assets/links/sios.png'},
  { name: 'Tecnovigilancia', url: 'https://farmacoweb.invima.gov.co/TecnoVigilancia/', img: 'assets/links/tecnovigilancia.png'},
  { name: 'Vigiflow', url: 'https://whoumcprod.b2clogin.com/whoumcprod.onmicrosoft.com/b2c_1_signinnomfa2withpasswordreset/oauth2/v2.0/authorize?client_id=f19e2327-16d5-4b49-a4c9-ea801ddca2c6&scope=https%3A%2F%2Fwhoumcprod.onmicrosoft.com%2F9771f5f2-3c0e-4895-9354-e527adbbb1c3%2Faccess_as_user%20openid%20profile%20offline_access&redirect_uri=https%3A%2F%2Fvigiflow.who-umc.org%2F&client-request-id=019c8cae-8f1a-7678-b126-0a0f7e882725&response_mode=fragment&client_info=1&nonce=019c8cae-8f1b-75a1-8a5e-0c36a0f36632&state=eyJpZCI6IjAxOWM4Y2FlLThmMWEtNzFmNS05YzRhLWQ3NDgzYjM1YmZkZiIsIm1ldGEiOnsiaW50ZXJhY3Rpb25UeXBlIjoicmVkaXJlY3QifX0%3D&x-client-SKU=msal.js.browser&x-client-VER=4.28.1&response_type=code&code_challenge=ShdDZ-qBxqyPlUUQ-Z7jDA0dD0B2L0uwC5kGCHGS8pg&code_challenge_method=S256', img: 'assets/links/vigiflow.png'},
  { name: 'SAFE', url: 'https://safe2.prixmasol.com/Home/Login', img: 'assets/links/safe.png' },
];
}
