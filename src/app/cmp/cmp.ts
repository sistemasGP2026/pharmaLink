import { Component } from '@angular/core';
import { BackToHome } from "../back-to-home/back-to-home";

@Component({
  selector: 'app-cmp',
  imports: [BackToHome],
  templateUrl: './cmp.html',
  styleUrl: './cmp.css',
})
export class Cmp {
  linksTrabajo: any[] = [
  { name: 'Portal Gestión Proveedores', url: 'https://portal.gestionproveedores.com/login', img: 'assets/links/gestion_proveedores.png' },
  { name: 'Metrocaribe', url: 'https://metrocaribe.com/acceso-de-clientes/', img: 'assets/links/metrocaribe.png' },
  { name: 'Analítica BIFAR', url: 'https://www.analitica-bifar.com/analitica/forms/especiales/frordser.php', img: 'assets/links/bifar.png' },
  { name: 'Tecnovigilancia', url: 'https://farmacoweb.invima.gov.co/TecnoVigilancia/', img: 'assets/links/tecnovigilancia.png'},
  { name: 'WHO UMC Reporting', url: 'https://industryereporting.who-umc.org/', img: 'assets/links/who_umc.png' },
  { name: 'INVIMA', url: 'https://www.invima.gov.co/', img: 'assets/links/invima.png' },
  { name: 'ControlDoc MinSalud', url: 'https://controldoc.minsalud.gov.co/ControlDocPQR/Consulta', img: 'assets/links/minsalud.png' },
  { name: 'HUC Caribe Interventoría', url: 'https://hucaribe.freylesoft.co/interventoria/menuContratista.xhtml', img: 'assets/links/hucaribe.png' },
  { name: 'PubMed', url: 'https://pubmed.ncbi.nlm.nih.gov/', img: 'assets/links/pubmed.png' },
  { name: 'ASHP', url: 'https://www.ashp.org', img: 'assets/links/ashp.png' },
  { name: 'SEFH', url: 'https://www.sefh.es/', img: 'assets/links/sefh.png' },
  { name: 'CIMA AEMPS', url: 'https://cima.aemps.es/', img: 'assets/links/cima.png' },
  { name: 'Medicamentos a un Clic', url: 'https://medicamentosaunclic.gov.co/', img: 'assets/links/medicamentos_un_clic.png' },
  { name: 'Medicamentos PLM', url: 'https://www.medicamentosplm.com/', img: 'assets/links/plm.png' },
  { name: 'RxList', url: 'https://www.rxlist.com/', img: 'assets/links/rxlist.png' },
  { name: 'DrugBank', url: 'https://go.drugbank.com/', img: 'assets/links/drugbank.png' },
  { name: 'USP Español', url: 'https://www.usp.org/espanol', img: 'assets/links/usp.png' },
  { name: 'NIH', url: 'https://www.nih.gov/', img: 'assets/links/nih.png' },
  { name: 'Medsafe', url: 'https://www.medsafe.govt.nz/', img: 'assets/links/medsafe.png' },
  { name: 'Disfarma Info Técnica', url: 'https://apps.disfarma.com.co/dir_tecnica/info_tecnica_productos/', img: 'assets/links/disfarma.png' },
  { name: 'Drugs.com', url: 'https://www.drugs.com/', img: 'assets/links/drugs.png' },
  { name: 'LWW', url: 'https://lww.com/pages/default.aspx', img: 'assets/links/lww.png' },
  { name: 'Vademecum', url: 'https://www.vademecum.es/', img: 'assets/links/vademecum.png' },
  { name: 'AccessMedicina', url: 'https://accessmedicina.mhmedical.com/', img: 'assets/links/accessmedicina.png' },
  { name: 'Stabilis', url: 'https://www.stabilis.org/', img: 'assets/links/stabilis.png' },
  { name: 'ScienceDirect', url: 'https://www.sciencedirect.com/', img: 'assets/links/sciencedirect.png' },
  { name: 'IJPC', url: 'https://ijpc.com/', img: 'assets/links/ijpc.png' },
];

}
