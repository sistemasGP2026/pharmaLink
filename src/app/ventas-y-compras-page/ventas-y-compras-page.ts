import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BackToHome } from '../back-to-home/back-to-home';

@Component({
  selector: 'app-ventas-y-compras-page',
  standalone: true,
  imports: [RouterModule, BackToHome],
  templateUrl: './ventas-y-compras-page.html',
  styleUrl: './ventas-y-compras-page.css',
})
export class VentasYComprasPage {
linksTrabajo: any[] = [
  { name: 'Facture', url: 'https://plataforma.facture.co/plataforma/inbox', img: 'assets/links/pl-colab.png' },
  { name: 'Revisión de registros INVIMA', url: 'https://consultaregistro.invima.gov.co/Consultas/consultas/consreg_encabcum.jsp', img: 'assets/links/registros_invima.png' },
  {name: 'SECOP', url: 'https://community.secop.gov.co/STS/Users/Login/Index?SkinName=CCE&ReturnUrl=%2fSTS%2fusers%2fissue.aspx%3fwa%3dwsignin1.0%26wtrealm%3dhttps%253a%252f%252fwww.secop.gov.co%252fCO1Marketplace%26wctx%3drm%253d0%2526id%253dpassive%2526ru%253d%25252fCO1Marketplace%25252f%26wct%3d2026-02-25T16%253a58%253a41Z&wa=wsignin1.0&wtrealm=https%3a%2f%2fwww.secop.gov.co%2fCO1Marketplace&wctx=rm%3d0%26id%3dpassive%26ru%3d%252fCO1Marketplace%252f&wct=2026-02-25T16%3a58%3a41Z', img: 'assets/links/secop.png' }
];
}
