import { Component } from '@angular/core';
import { BackToHome } from '../back-to-home/back-to-home';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-gestion-humana',
  standalone: true,
  imports: [RouterModule,BackToHome],
  templateUrl: './gestion-humana.html',
  styleUrl: './gestion-humana.css',
})
export class GestionHumana {
  linksTrabajo: any[] = [
  { name: 'Pruebas psicotécnicas', url: 'https://www.potential-365.com/?redirect=%2Fadmin%2Fpeople', img: 'assets/links/pruebas_psicotecnicas.png' },
  { name: 'Portal confamiliar', url: 'https://portal.comfamiliar.org.co/Mercurio/Mercurio/login/salir', img: 'assets/links/comfamiliar.png' },
  { name: 'Cajamag', url: 'https://mercurio.cajamag.com.co/Mercurio/Mercurio/empresa/index', img: 'assets/links/cajamag.png' },
  { name: 'Aprendizes SENA', url: 'https://caprendizaje.sena.edu.co/sgva/SGVA_Diseno/pag/login.aspx?ReturnUrl=%2Fsgva%2FEmpresa%2FIndex', img: 'assets/links/aprendices_sena.png' },
  { name: 'Almuerzos ', url: 'https://nutrimosyservimos124546-my.sharepoint.com/:x:/g/personal/facturacion_nutrimosyservimos_com/IQBadd3feqBdTYNxLUMex-vYAdRadK-7sSuVWRK1gqV0VJI', img: 'assets/links/almuerzos.png' },
  { name: 'Computrabajo ', url: 'https://empresa.co.computrabajo.com/Login?ReturnUrl=%2fCompany', img: 'assets/links/computrabajo.png' }
];

}
