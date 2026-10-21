import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BackToHome } from '../back-to-home/back-to-home';

@Component({
  selector: 'sgi-component',
  standalone: true,
  imports: [RouterModule, BackToHome],
  templateUrl: './sgi-component.html',
  styleUrl: './sgi-component.css',
})
export class SgiComponent {

  linksTrabajo: any[] = [
    {
      name: 'Pagina web institucional',
      url: 'https://gestionpharma.com.co/',
      img: 'assets/links/home.png'
    },
    {
      name: 'Examenes medicos',
      url: 'https://www.aisltda.com.co/',
      img: 'assets/links/examenes_medicos.png'
    },
    {
      name: 'Aplicativo de tickets',
      url: 'https://calidadgestionpharma.tech-q.net/scp/login.php',
      img: 'assets/links/tickets.png'
    },
    {
      name: 'Intranet',
      url: 'https://sites.google.com/gestionpharma.com.co/intranet/inicio?authuser=0',
      img: 'assets/links/intranet.png'
    },
    {
      name: 'Colegio sura',
      url: 'https://colegiosura.com/',
      img: 'assets/links/colegio_sura.png'
    },
    {
      name: 'SAC',
      url: 'https://clientesac.urbagis.com/login',
      img: 'assets/links/sac.png'
    },
    {
      name: 'SURA',
      url: 'https://login.sura.com/sso/servicelogin.aspx?continueTo=https%3A%2F%2Fsucursalempresas.suramericana.com&service=clienteseguros',
      img: 'assets/links/sura.png'
    },
    {
      name: 'PHARMANET',
      url: 'http://10.10.1.24/auth/sign-in',
      img: 'assets/links/pharmanet.png'
    },
    {
      name: 'CLICKOFFICE',
      url: 'https://clickoffice.nubeprint.com/panel/',
      img: 'assets/links/clickoffice.png'
    },

    {
      name: 'TAREAS ADMINISTRATIVAS',
      url: 'http://10.10.1.24:8090/',
      img: 'assets/links/tareas.png'
    },
    {
      name: 'INVENTARIO TI',
      url: 'http://10.10.1.24:8100/',
      img: 'assets/links/inventario.png'
    },
    {
      name: 'CLARO CLOUD',
      url: 'https://cp.cloud.claro.com.co/auth/realms/sr2/protocol/openid-connect/auth?response_type=code&redirect_uri=https%3A%2F%2Fcp.cloud.claro.com.co%2Fsp%2Fcallback%2F%3Fclient_name%3Dsr2&state=eUTcSUvl7hvxCRR51koF6gvUsI-5H4NIBNQxUlbF-JI&client_id=oss&scope=openid',
      img: 'assets/links/claro_cloud.png'
    },
    {
      name: 'CLARO EMPRESAS',
      url: 'https://miclaroempresas.com.co/login',
      img: 'assets/links/claro_empresa.png'
    }
    

  ];
}